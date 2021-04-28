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

const glVariableCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(position.character - 3, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("([^\\w.]|^)gl").test(text)) {
			completionItems.push(new vscode.CompletionItem('gl_BackColor'));
			completionItems.push(new vscode.CompletionItem('gl_BackLightModelProduct'));
			completionItems.push(new vscode.CompletionItem('gl_BackLightProduct'));
			completionItems.push(new vscode.CompletionItem('gl_BackMaterial'));
			completionItems.push(new vscode.CompletionItem('gl_BackSecondaryColor'));
			completionItems.push(new vscode.CompletionItem('gl_BaseInstance'));
			completionItems.push(new vscode.CompletionItem('gl_BaseVertex'));
			completionItems.push(new vscode.CompletionItem('gl_ClipDistance'));
			completionItems.push(new vscode.CompletionItem('gl_ClipPlane'));
			completionItems.push(new vscode.CompletionItem('gl_ClipVertex'));
			completionItems.push(new vscode.CompletionItem('gl_CullDistance'));
			completionItems.push(new vscode.CompletionItem('gl_Color'));
			completionItems.push(new vscode.CompletionItem('gl_DepthRange'));
			completionItems.push(new vscode.CompletionItem('gl_DepthRangeParameters'));
			completionItems.push(new vscode.CompletionItem('gl_DrawID'));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneQ'));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneR'));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneS'));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneT'));
			completionItems.push(new vscode.CompletionItem('gl_Fog'));
			completionItems.push(new vscode.CompletionItem('gl_FogCoord'));
			completionItems.push(new vscode.CompletionItem('gl_FogFragCoord'));
			completionItems.push(new vscode.CompletionItem('gl_FogParameters'));
			completionItems.push(new vscode.CompletionItem('gl_FragColor'));
			completionItems.push(new vscode.CompletionItem('gl_FragCoord'));
			completionItems.push(new vscode.CompletionItem('gl_FragData'));
			completionItems.push(new vscode.CompletionItem('gl_FragDepth'));
			completionItems.push(new vscode.CompletionItem('gl_FrontColor'));
			completionItems.push(new vscode.CompletionItem('gl_FrontFacing'));
			completionItems.push(new vscode.CompletionItem('gl_FrontLightModelProduct'));
			completionItems.push(new vscode.CompletionItem('gl_FrontLightProduct'));
			completionItems.push(new vscode.CompletionItem('gl_FrontMaterial'));
			completionItems.push(new vscode.CompletionItem('gl_FrontSecondaryColor'));
			completionItems.push(new vscode.CompletionItem('gl_GlobalInvocationID'));
			completionItems.push(new vscode.CompletionItem('gl_HelperInvocation'));
			completionItems.push(new vscode.CompletionItem('gl_in'));
			completionItems.push(new vscode.CompletionItem('gl_InstanceID'));
			completionItems.push(new vscode.CompletionItem('gl_InstanceIndex'));
			completionItems.push(new vscode.CompletionItem('gl_InvocationID'));
			completionItems.push(new vscode.CompletionItem('gl_Layer'));
			completionItems.push(new vscode.CompletionItem('gl_LightModel'));
			completionItems.push(new vscode.CompletionItem('gl_LightModelParameters'));
			completionItems.push(new vscode.CompletionItem('gl_LightModelProducts'));
			completionItems.push(new vscode.CompletionItem('gl_LightProducts'));
			completionItems.push(new vscode.CompletionItem('gl_LightSource'));
			completionItems.push(new vscode.CompletionItem('gl_LightSourceParameters'));
			completionItems.push(new vscode.CompletionItem('gl_LocalInvocationID'));
			completionItems.push(new vscode.CompletionItem('gl_LocalInvocationIndex'));
			completionItems.push(new vscode.CompletionItem('gl_MaterialParameters'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrix'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrixInverse'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrixInverseTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrixTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrix'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrixInverse'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrixInverseTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrixTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord0'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord1'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord2'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord3'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord4'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord5'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord6'));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord7'));
			completionItems.push(new vscode.CompletionItem('gl_NumWorkGroups'));
			completionItems.push(new vscode.CompletionItem('gl_Normal'));
			completionItems.push(new vscode.CompletionItem('gl_NormalMatrix'));
			completionItems.push(new vscode.CompletionItem('gl_NormalScale'));
			completionItems.push(new vscode.CompletionItem('gl_out'));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneQ'));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneR'));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneS'));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneT'));
			completionItems.push(new vscode.CompletionItem('gl_PatchVerticesIn'));
			completionItems.push(new vscode.CompletionItem('gl_PerFragment'));
			completionItems.push(new vscode.CompletionItem('gl_PerVertex'));
			completionItems.push(new vscode.CompletionItem('gl_Point'));
			completionItems.push(new vscode.CompletionItem('gl_PointCoord'));
			completionItems.push(new vscode.CompletionItem('gl_PointParameters'));
			completionItems.push(new vscode.CompletionItem('gl_PointSize'));
			completionItems.push(new vscode.CompletionItem('gl_Position'));
			completionItems.push(new vscode.CompletionItem('gl_PrimitiveID'));
			completionItems.push(new vscode.CompletionItem('gl_PrimitiveIDIn'));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrix'));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrixInverse'));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrixInverseTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrixTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_SampleID'));
			completionItems.push(new vscode.CompletionItem('gl_SamplePosition'));
			completionItems.push(new vscode.CompletionItem('gl_SampleMask'));
			completionItems.push(new vscode.CompletionItem('gl_SampleMaskIn'));
			completionItems.push(new vscode.CompletionItem('gl_SecondaryColor'));
			completionItems.push(new vscode.CompletionItem('gl_TessCoord'));
			completionItems.push(new vscode.CompletionItem('gl_TessLevelInner'));
			completionItems.push(new vscode.CompletionItem('gl_TessLevelOuter'));
			completionItems.push(new vscode.CompletionItem('gl_TexCoord'));
			completionItems.push(new vscode.CompletionItem('gl_TextureEnvColor'));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrix'));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrixInverse'));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrixInverseTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrixTranspose'));
			completionItems.push(new vscode.CompletionItem('gl_Vertex'));
			completionItems.push(new vscode.CompletionItem('gl_VertexID'));
			completionItems.push(new vscode.CompletionItem('gl_VertexIndex'));
			completionItems.push(new vscode.CompletionItem('gl_ViewportIndex'));
			completionItems.push(new vscode.CompletionItem('gl_WorkGroupID'));
			completionItems.push(new vscode.CompletionItem('gl_WorkGroupSize'));
		}
		return completionItems;
	}
});

const glConstantCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(position.character - 3, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("([^\\w.]|^)gl").test(text)) {
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexAtomicCounterBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexAtomicCounters'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexImageUniforms'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentInputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryInputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlInputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationInputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryOutputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlOutputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationOutputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexOutputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexTextureImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryImageTotalOutputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlImageTotalOutputComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeUniformComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentUniformComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryUniformComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlUniformComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationUniformComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexUniformComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentUniformVectors'));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentUniformVectors'));
			completionItems.push(new vscode.CompletionItem('gl_MaxAtomicCounterBindings'));
			completionItems.push(new vscode.CompletionItem('gl_MaxAtomicCounterBufferSize'));
			completionItems.push(new vscode.CompletionItem('gl_MaxClipDistances'));
			completionItems.push(new vscode.CompletionItem('gl_MaxClipPlanes'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCullDistances'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedClipAndCullDistances'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedImageUnitsAndFragmentOutputs'));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedShaderOutputResources'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeWorkGroupCount'));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeWorkGroupSize'));
			completionItems.push(new vscode.CompletionItem('gl_MaxDrawBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryOutputVertices'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVaryingComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryVaryingComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxImageSamples'));
			completionItems.push(new vscode.CompletionItem('gl_MaxImageUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxInputAttachments'));
			completionItems.push(new vscode.CompletionItem('gl_MaxLights'));
			completionItems.push(new vscode.CompletionItem('gl_MaxPatchVertices'));
			completionItems.push(new vscode.CompletionItem('gl_MaxProgramTexelOffset'));
			completionItems.push(new vscode.CompletionItem('gl_MaxSamples'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessGenLevel'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessPatchComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTextureCoords'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTextureUnits'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTransformFeedbackBuffers'));
			completionItems.push(new vscode.CompletionItem('gl_MaxTransformFeedbackInterleavedComponents'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVaryingFloats'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVaryingVectors'));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexAttribs'));
			completionItems.push(new vscode.CompletionItem('gl_MaxViewports'));
			completionItems.push(new vscode.CompletionItem('gl_MinProgramTexelOffset'));
		}
		return completionItems;
	}
});

export const completionItemProviders: vscode.Disposable[] = [
	blankCompletionItemProvider,
	preprocessorCompletionItemProvider,
	parenCompletionItemProvider,
	colonCompletionItemProvider
];