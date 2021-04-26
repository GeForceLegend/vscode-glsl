'use strict';

import * as vscode from 'vscode';

export const blankCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#version\\s+[0-9]+\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('core'));
			completionItems.push(new vscode.CompletionItem('es'));
			completionItems.push(new vscode.CompletionItem('compatibility'));
		}
		if (new RegExp("\\s*#(if|elif)\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('defined'));
			completionItems.push(new vscode.CompletionItem('!defined'));
		}
		return completionItems;
	}
}, ' ');

export const preprocessorCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('version'));
			completionItems.push(new vscode.CompletionItem('pragma'));
			completionItems.push(new vscode.CompletionItem('include'));
			completionItems.push(new vscode.CompletionItem('import'));
			completionItems.push(new vscode.CompletionItem('moj_import'));
			completionItems.push(new vscode.CompletionItem('extension'));
			completionItems.push(new vscode.CompletionItem('error'));
			completionItems.push(new vscode.CompletionItem('define'));
			completionItems.push(new vscode.CompletionItem('if'));
			completionItems.push(new vscode.CompletionItem('elif'));
			completionItems.push(new vscode.CompletionItem('undef'));
			completionItems.push(new vscode.CompletionItem('else'));
			completionItems.push(new vscode.CompletionItem('endif'));
			completionItems.push(new vscode.CompletionItem('ifdef'));
			completionItems.push(new vscode.CompletionItem('ifndef'));
		}
		return completionItems;
	}
}, '#');

export const parenCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#pragma\\s+[a-zA-Z_][\\w]*\\(\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('on'));
			completionItems.push(new vscode.CompletionItem('off'));
		}
		return completionItems;
	}
}, '(');

export const colonCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#extension\\s+[a-zA-Z_][\\w]*\\s*:").test(text)) {
			completionItems.push(new vscode.CompletionItem(' require'));
			completionItems.push(new vscode.CompletionItem(' enable'));
			completionItems.push(new vscode.CompletionItem(' warn'));
			completionItems.push(new vscode.CompletionItem(' disable'));
		}
		return completionItems;
	}
}, ':');