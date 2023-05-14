import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "cli-auto-complete" is now active!');
	let disposable = vscode.commands.registerCommand('cli-auto-complete.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from cli-auto-complete!');
	});
	context.subscriptions.push(disposable);
}
export function deactivate() {}
