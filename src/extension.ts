'use strict';

import * as vscode from 'vscode';
// import * as semantic from './semantic';
import * as completion from './completion';


export function activate(context: vscode.ExtensionContext) {
	// context.subscriptions.push(semantic.semanticTokensProvider);
	completion.completionItemProviders.forEach((completionItemProvider) => {
		context.subscriptions.push(completionItemProvider);
	});
}
