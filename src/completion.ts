'use strict';

import * as vscode from 'vscode';

const blankCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#version\\s+[0-9]+\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('core'));
			completionItems.push(new vscode.CompletionItem('es'));
			completionItems.push(new vscode.CompletionItem('compatibility'));
		}
		else if (new RegExp("\\s*#(if|elif)\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('defined'));
			completionItems.push(new vscode.CompletionItem('!defined'));
		}
		else if (new RegExp("\\s*layout\\s*\\(.*\\)\\s*").test(text)) {
			if (!new RegExp("\\s*layout\\s*\\(.*\\)\\s*\\w+").test(text)) {
				completionItems.push(new vscode.CompletionItem('in'));
				completionItems.push(new vscode.CompletionItem('out'));
				completionItems.push(new vscode.CompletionItem('uniform'));
				completionItems.push(new vscode.CompletionItem('buffer'));
			}
		}
		else if (new RegExp("\\s*layout\\s*\\([^\\)]*").test(text)) {
			completionItems.push(new vscode.CompletionItem('shared'));
			completionItems.push(new vscode.CompletionItem('packed'));
			completionItems.push(new vscode.CompletionItem('std140'));
			completionItems.push(new vscode.CompletionItem('std430'));
			completionItems.push(new vscode.CompletionItem('row_major'));
			completionItems.push(new vscode.CompletionItem('column_major'));
			completionItems.push(new vscode.CompletionItem('binding = '));
			completionItems.push(new vscode.CompletionItem('offset = '));
			completionItems.push(new vscode.CompletionItem('align = '));
			completionItems.push(new vscode.CompletionItem('set = '));
			completionItems.push(new vscode.CompletionItem('push_constant'));
			completionItems.push(new vscode.CompletionItem('input_attachment_index = '));
			completionItems.push(new vscode.CompletionItem('location = '));
			completionItems.push(new vscode.CompletionItem('component = '));
			completionItems.push(new vscode.CompletionItem('index = '));
			completionItems.push(new vscode.CompletionItem('triangles'));
			completionItems.push(new vscode.CompletionItem('quads'));
			completionItems.push(new vscode.CompletionItem('isolines'));
			completionItems.push(new vscode.CompletionItem('equal_spacing'));
			completionItems.push(new vscode.CompletionItem('fractional_even_spacing'));
			completionItems.push(new vscode.CompletionItem('fractional_odd_spacing'));
			completionItems.push(new vscode.CompletionItem('cw'));
			completionItems.push(new vscode.CompletionItem('ccw'));
			completionItems.push(new vscode.CompletionItem('point_mode'));
			completionItems.push(new vscode.CompletionItem('points'));
			completionItems.push(new vscode.CompletionItem('lines'));
			completionItems.push(new vscode.CompletionItem('lines_adjacency'));
			completionItems.push(new vscode.CompletionItem('triangles_adjacency'));
			completionItems.push(new vscode.CompletionItem('invocations = '));
			completionItems.push(new vscode.CompletionItem('origin_upper_left'));
			completionItems.push(new vscode.CompletionItem('pixel_center_integer'));
			completionItems.push(new vscode.CompletionItem('early_fragment_tests'));
			completionItems.push(new vscode.CompletionItem('local_size_x = '));
			completionItems.push(new vscode.CompletionItem('local_size_y = '));
			completionItems.push(new vscode.CompletionItem('local_size_z = '));
			completionItems.push(new vscode.CompletionItem('local_size_x_id = '));
			completionItems.push(new vscode.CompletionItem('local_size_y_id = '));
			completionItems.push(new vscode.CompletionItem('local_size_z_id = '));
			completionItems.push(new vscode.CompletionItem('xfb_buffer = '));
			completionItems.push(new vscode.CompletionItem('xfb_stride = '));
			completionItems.push(new vscode.CompletionItem('xfb_offset = '));
			completionItems.push(new vscode.CompletionItem('vertices = '));
			completionItems.push(new vscode.CompletionItem('line_strip'));
			completionItems.push(new vscode.CompletionItem('triangle_strip'));
			completionItems.push(new vscode.CompletionItem('max_vertices = '));
			completionItems.push(new vscode.CompletionItem('stream = '));
			completionItems.push(new vscode.CompletionItem('depth_any'));
			completionItems.push(new vscode.CompletionItem('depth_grreater'));
			completionItems.push(new vscode.CompletionItem('depth_less'));
			completionItems.push(new vscode.CompletionItem('depth_unchanged'));
			completionItems.push(new vscode.CompletionItem('constant_id = '));
			completionItems.push(new vscode.CompletionItem('rgba32f'));
			completionItems.push(new vscode.CompletionItem('rgba16f'));
			completionItems.push(new vscode.CompletionItem('rg32f'));
			completionItems.push(new vscode.CompletionItem('rg16f'));
			completionItems.push(new vscode.CompletionItem('r11f_g11f_b10f'));
			completionItems.push(new vscode.CompletionItem('r32f'));
			completionItems.push(new vscode.CompletionItem('r16f'));
			completionItems.push(new vscode.CompletionItem('rgba16'));
			completionItems.push(new vscode.CompletionItem('rgb10_a2'));
			completionItems.push(new vscode.CompletionItem('rgba8'));
			completionItems.push(new vscode.CompletionItem('rg16'));
			completionItems.push(new vscode.CompletionItem('rg8'));
			completionItems.push(new vscode.CompletionItem('r16'));
			completionItems.push(new vscode.CompletionItem('r8'));
			completionItems.push(new vscode.CompletionItem('rgba16_snorm'));
			completionItems.push(new vscode.CompletionItem('rgba8_snorm'));
			completionItems.push(new vscode.CompletionItem('rg16_snorm'));
			completionItems.push(new vscode.CompletionItem('rg8_snorm'));
			completionItems.push(new vscode.CompletionItem('r16_snorm'));
			completionItems.push(new vscode.CompletionItem('r8_snorm'));
			completionItems.push(new vscode.CompletionItem('rgba32i'));
			completionItems.push(new vscode.CompletionItem('rgba16i'));
			completionItems.push(new vscode.CompletionItem('rgba8i'));
			completionItems.push(new vscode.CompletionItem('rg32i'));
			completionItems.push(new vscode.CompletionItem('rg16i'));
			completionItems.push(new vscode.CompletionItem('rg8i'));
			completionItems.push(new vscode.CompletionItem('r32i'));
			completionItems.push(new vscode.CompletionItem('r16i'));
			completionItems.push(new vscode.CompletionItem('r8i'));
			completionItems.push(new vscode.CompletionItem('rgba32ui'));
			completionItems.push(new vscode.CompletionItem('rgba16ui'));
			completionItems.push(new vscode.CompletionItem('rgb10_a2ui'));
			completionItems.push(new vscode.CompletionItem('rgba8ui'));
			completionItems.push(new vscode.CompletionItem('rg32ui'));
			completionItems.push(new vscode.CompletionItem('rg16ui'));
			completionItems.push(new vscode.CompletionItem('rg8ui'));
			completionItems.push(new vscode.CompletionItem('r32ui'));
			completionItems.push(new vscode.CompletionItem('r16ui'));
			completionItems.push(new vscode.CompletionItem('r8ui'));
		}
		return completionItems;
	}
}, ' ');

const preprocessorCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
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

const parenCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
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

const colonCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
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

export const completionItemProviders: vscode.Disposable[] = [
	blankCompletionItemProvider,
	preprocessorCompletionItemProvider,
	parenCompletionItemProvider,
	colonCompletionItemProvider
];