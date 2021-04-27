'use strict';

import { off } from 'node:process';
import * as vscode from 'vscode';
import * as main from './extension';

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

interface Block {
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

const blocks: Block[] = [];

function parseBlocks(document: string) {
	let offset = 0;
	while (true) {
		const block: Block = { start: 0, end: 0 };
		block.start = document.indexOf('{', offset);
		if (block.start < 0) {
			return;
		}
		offset = block.start + 1;
		let leftParenPos;
		let rightParenPos;
		let parensDepth = 0;
		while (true) {
			leftParenPos = document.indexOf('{', offset);
			rightParenPos = document.indexOf('}', offset);
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
				leftParenPos = document.indexOf('{', offset);
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
	const rightParens = text.lastIndexOf(')', offset);
	if (text.indexOf('{', rightParens) != offset) {
		return parameters;
	}
	const leftParens = text.lastIndexOf('(', rightParens);
	const contents = document.getText(new vscode.Range(document.positionAt(leftParens + 1), document.positionAt(rightParens))).split(',');
	contents.forEach((content) => {
		if (new RegExp("\\s*((const)\\s+)?((inout|out|in)\\s+)?((highp|mediump|lowp)\\s+)?([a-zA-Z_][\\w]*)(\\[([0-9]+)?\\])?(\\s+([a-zA-Z_][\\w]*\\b)(\\[([a-zA-Z_][\\w]*)\\])?)?").test(content)) {
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
		parseBlocks(text);
		blocks.forEach((block) => {
			const parameters = parseFunctionDefination(document, block.start);
			const startLine = document.positionAt(block.start).line;
			const startOffset = document.positionAt(block.start).character;
			const endLine = document.positionAt(block.end).line;
			const endOffset = document.positionAt(block.end).character;
			for(let i = startLine; i <= endLine; i++) {
				const line = document.lineAt(i).text;
				parameters.forEach((parameter) => {
					let offset;
					offset = i == startLine ? startOffset : 0;
					while (true) {
						const position = line.indexOf('texData', offset);
						if (position < 0 || (i == endLine && position > endOffset)) {
							break;
						}
						builder.push(i, position, parameter.length, this._encodeTokenType('parameter'));
						offset = position + parameter.length;
					}
				});
			}
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