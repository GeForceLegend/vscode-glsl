'use strict';

import * as vscode from 'vscode';
import * as completion from './completion';

export function activate(context: vscode.ExtensionContext) {
	completion.completionItemProviders.forEach((completionItemProvider) => {
		context.subscriptions.push(completionItemProvider);
	});
}
