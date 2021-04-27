'use strict';

import * as vscode from 'vscode';

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

class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
		const text = document.getText();
		const builder = new vscode.SemanticTokensBuilder();
		parseBlocks(text);
		blocks.forEach((block) => {
			builder.push(document.positionAt(block.start).line, document.positionAt(block.start).character, 1, tokenTypes.get('comment')!);
			builder.push(document.positionAt(block.end).line, document.positionAt(block.end).character, 1, tokenTypes.get('comment')!);
		});
		return builder.build();
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