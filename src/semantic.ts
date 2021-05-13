'use strict';

import * as vscode from 'vscode';

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

export interface Block {
	start: number;
	end: number;
}

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const legend = (function () {
	const tokenTypesLegend = [
		'comment', 'string', 'keyword', 'number', 'regexp', 'operator', 'namespace',
		'type', 'struct', 'class', 'interface', 'enum', 'typeParameter', 'function',
		'method', 'macro', 'variable', 'parameter', 'property', 'label'
	];
	tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

	const tokenModifiersLegend = [
		'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
		'modification', 'async'
	];
	tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

	return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();

function isComment(position: number, document: vscode.TextDocument): boolean {
	const lineComment = document.lineAt(document.positionAt(position).line).text.indexOf('//');
	const linePos = document.positionAt(position).character;
	if (lineComment > -1 && lineComment < linePos) {
		return true;
	}
	const blockCommentStart = document.getText().lastIndexOf('/*', position);
	if (blockCommentStart < 0) {
		return false;
	}
	const blockCommentEnd = document.getText().indexOf('*/', blockCommentStart + 2);
	if (blockCommentEnd < 0 || blockCommentEnd > position) {
		return true;
	}
	return false;
}

function parseMacros(document: vscode.TextDocument): string[] {
	const macros: string[] = [];
	const text = document.getText();
	const regexp = new RegExp('^\\s*#define\\s+[a-zA-Z_][\\w]*(\\s+[\\w.]+)?\\s*(//.*)?$');
	let offset = 0;
	let position;
	let line;
	while (true) {
		position = text.indexOf('#define', offset);
		if(position < 0) {
			break;
		}
		line = document.lineAt(document.positionAt(position).line).text;
		offset = position + 1;
	}
	return macros;
}

export function parseBlocks(document: vscode.TextDocument): Block[] {
	const blocks: Block[] = [];
	const text = document.getText();
	let offset = 0;
	while (true) {
		const block: Block = { start: 0, end: 0 };
		block.start = text.indexOf('{', offset);
		if (block.start < 0) {
			return blocks;
		}
		if (isComment(block.start, document)) {
			offset = block.start + 1;
			continue;
		}
		offset = block.start + 1;
		let leftParenPos;
		let rightParenPos;
		let parensDepth = 0;
		while (true) {
			leftParenPos = text.indexOf('{', offset);
			rightParenPos = text.indexOf('}', offset);
			if (leftParenPos > rightParenPos || leftParenPos < 0) {
				offset = rightParenPos + 1;
				if (parensDepth > 0) {
					parensDepth--;
					continue;
				}
				block.end = rightParenPos;
				blocks.push(block);
				break;
			}
			while (true) {
				offset = leftParenPos + 1;
				leftParenPos = text.indexOf('{', offset);
				if (leftParenPos < 0 || leftParenPos > rightParenPos) {
					offset = rightParenPos + 1;
					break;
				}
				parensDepth++;
			}
			offset = rightParenPos + 1;
		}
	}
}

function parseFunctionDefination(document: vscode.TextDocument, offset: number): string[] {
	const parameters: string[] = [];
	const text = document.getText();
	let rightParens = text.lastIndexOf(')', offset);
	while (isComment(rightParens, document)) {
		rightParens = text.lastIndexOf(')', rightParens - 1);
	}
	let blockPos = text.indexOf('{', rightParens);
	while (isComment(blockPos, document)) {
		blockPos = text.indexOf('{', blockPos + 1);
	}
	if (text.indexOf('{', rightParens) != offset) {
		return parameters;
	}
	const leftParens = text.lastIndexOf('(', rightParens);
	const contents = document.getText(new vscode.Range(document.positionAt(leftParens + 1), document.positionAt(rightParens))).split(',');
	const isParameter = new RegExp("\\s*((const)\\s+)?((inout|out|in)\\s+)?((highp|mediump|lowp)\\s+)?([a-zA-Z_][\\w]*)(\\[([0-9]+)?\\])?(\\s+([a-zA-Z_][\\w]*\\b)(\\[([a-zA-Z_][\\w]*)\\])?)?");
	contents.forEach((content) => {
		if (isParameter.test(content)) {
			const parts = content.split(' ');
			parameters.push(parts[parts.length - 1]);
		}
	});
	return parameters;
}

class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
		const text = document.getText();
		const builder = new vscode.SemanticTokensBuilder();
		const blocks = parseBlocks(document);
		blocks.forEach((block) => {
			const parameters = parseFunctionDefination(document, block.start);
			parameters.forEach((parameter) => {
				let offset = block.start;
				while (true) {
					const position = text.indexOf(parameter, offset);
					if (position < 0 || (position > block.end)) {
						break;
					}
					const documentPos = document.positionAt(position);
					const lineNum = documentPos.line;
					const line = document.lineAt(lineNum).text;
					const character = documentPos.character;
					offset = position + parameter.length;
					if (new RegExp("(\\w|\\.)").test(line.charAt(character - 1)) || new RegExp("\\w").test(line.charAt(character + parameter.length)) || isComment(position, document)) {
						continue;
					}
					builder.push(lineNum, character, parameter.length, this._encodeTokenType('parameter'));
				}
			});
		});
		return builder.build();
	}

	private _encodeTokenType(tokenType: string): number {
		if (tokenTypes.has(tokenType)) {
			return tokenTypes.get(tokenType)!;
		} else {
			return tokenTypes.size + 2;
		}
	}

	private _encodeTokenModifiers(strTokenModifiers: string[]): number {
		let result = 0;
		for (let i = 0; i < strTokenModifiers.length; i++) {
			const tokenModifier = strTokenModifiers[i];
			if (tokenModifiers.has(tokenModifier)) {
				result = result | (1 << tokenModifiers.get(tokenModifier)!);
			}
		}
		return result;
	}
}

export const semanticTokensProvider = vscode.languages.registerDocumentSemanticTokensProvider(
	{ language: 'glsl', scheme: 'file' }, new DocumentSemanticTokensProvider(), legend
);