'use strict';

import * as vscode from 'vscode';

const glVariableCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(position.character - 3, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("([^\\w.]|^)gl").test(text)) {
			completionItems.push(new vscode.CompletionItem('gl_BackColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_BackLightModelProduct', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_BackLightProduct', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_BackMaterial', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_BackSecondaryColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_BaseInstance', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_BaseVertex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ClipDistance', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ClipPlane', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ClipVertex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_CullDistance', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Color', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_DepthRange', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_DepthRangeParameters', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_DrawID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneQ', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneR', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneS', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_EyePlaneT', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Fog', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FogCoord', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FogFragCoord', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FogParameters', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FragColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FragCoord', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FragData', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FragDepth', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FrontColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FrontFacing', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FrontLightModelProduct', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FrontLightProduct', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FrontMaterial', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_FrontSecondaryColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_GlobalInvocationID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_HelperInvocation', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_in', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_InstanceID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_InstanceIndex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_InvocationID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Layer', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LightModel', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LightModelParameters', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LightModelProducts', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LightProducts', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LightSource', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LightSourceParameters', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LocalInvocationID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_LocalInvocationIndex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MaterialParameters', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrix', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrixInverse', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrixInverseTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewMatrixTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrix', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrixInverse', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrixInverseTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ModelViewProjectionMatrixTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord0', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord1', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord2', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord3', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord4', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord5', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord6', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_MultiTexCoord7', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_NumWorkGroups', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Normal', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_NormalMatrix', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_NormalScale', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_out', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneQ', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneR', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneS', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ObjectPlaneT', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PatchVerticesIn', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PerFragment', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PerVertex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Point', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PointCoord', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PointParameters', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PointSize', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Position', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PrimitiveID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_PrimitiveIDIn', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrix', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrixInverse', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrixInverseTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ProjectionMatrixTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_SampleID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_SamplePosition', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_SampleMask', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_SampleMaskIn', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_SecondaryColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TessCoord', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TessLevelInner', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TessLevelOuter', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TexCoord', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TextureEnvColor', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrix', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrixInverse', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrixInverseTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_TextureMatrixTranspose', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_Vertex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_VertexID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_VertexIndex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_ViewportIndex', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_WorkGroupID', vscode.CompletionItemKind.Variable));
			completionItems.push(new vscode.CompletionItem('gl_WorkGroupSize', vscode.CompletionItemKind.Variable));
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
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexAtomicCounterBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexAtomicCounters', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexImageUniforms', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentInputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryInputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlInputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationInputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryOutputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlOutputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationOutputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexOutputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexTextureImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryImageTotalOutputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlImageTotalOutputComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeUniformComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentUniformComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryUniformComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessControlUniformComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessEvaluationUniformComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexUniformComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentUniformVectors', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxFragmentUniformVectors', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxAtomicCounterBindings', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxAtomicCounterBufferSize', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxClipDistances', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxClipPlanes', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCullDistances', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedClipAndCullDistances', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedImageUnitsAndFragmentOutputs', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxCombinedShaderOutputResources', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeWorkGroupCount', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxComputeWorkGroupSize', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxDrawBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryOutputVertices', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVaryingComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxGeometryVaryingComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxImageSamples', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxImageUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxInputAttachments', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxLights', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxPatchVertices', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxProgramTexelOffset', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxSamples', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessGenLevel', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTessPatchComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTextureCoords', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTextureUnits', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTransformFeedbackBuffers', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxTransformFeedbackInterleavedComponents', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVaryingFloats', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVaryingVectors', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxVertexAttribs', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MaxViewports', vscode.CompletionItemKind.Constant));
			completionItems.push(new vscode.CompletionItem('gl_MinProgramTexelOffset', vscode.CompletionItemKind.Constant));
		}
		return completionItems;
	}
});

const blankCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#version\\s+[0-9]+\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('core', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('es', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('compatibility', vscode.CompletionItemKind.Property));
		}
		else if (new RegExp("\\s*#(if|elif)\\s*").test(text)) {
			const trigger = line.text.substring(position.character - 1, position.character);
			if (trigger != "d") {
				return completionItems;
			}
			completionItems.push(new vscode.CompletionItem('defined', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('!defined', vscode.CompletionItemKind.Keyword));
		}
		else if (new RegExp("\\s*layout\\s*\\(.*\\)\\s*").test(text)) {
			if (!new RegExp("\\s*layout\\s*\\(.*\\)\\s*\\w+").test(text)) {
				completionItems.push(new vscode.CompletionItem('in', vscode.CompletionItemKind.Keyword));
				completionItems.push(new vscode.CompletionItem('out', vscode.CompletionItemKind.Keyword));
				completionItems.push(new vscode.CompletionItem('uniform', vscode.CompletionItemKind.Keyword));
				completionItems.push(new vscode.CompletionItem('buffer', vscode.CompletionItemKind.Keyword));
			}
		}
		else if (new RegExp("\\s*layout\\s*\\([^\\)]*").test(text)) {
			completionItems.push(new vscode.CompletionItem('shared', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('packed', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('std140', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('std430', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('row_major', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('column_major', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('binding = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('offset = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('align = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('set = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('push_constant', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('input_attachment_index = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('location = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('component = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('index = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('triangles', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('quads', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('isolines', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('equal_spacing', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('fractional_even_spacing', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('fractional_odd_spacing', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('cw', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('ccw', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('point_mode', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('points', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('lines', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('lines_adjacency', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('triangles_adjacency', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('invocations = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('origin_upper_left', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('pixel_center_integer', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('early_fragment_tests', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('local_size_x = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('local_size_y = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('local_size_z = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('local_size_x_id = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('local_size_y_id = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('local_size_z_id = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('xfb_buffer = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('xfb_stride = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('xfb_offset = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('vertices = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('line_strip', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('triangle_strip', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('max_vertices = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('stream = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('depth_any', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('depth_grreater', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('depth_less', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('depth_unchanged', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('constant_id = ', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba32f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba16f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg32f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg16f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r11f_g11f_b10f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r32f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r16f', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba16', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgb10_a2', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba8', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg16', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg8', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r16', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r8', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba16_snorm', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba8_snorm', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg16_snorm', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg8_snorm', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r16_snorm', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r8_snorm', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba32i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba16i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba8i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg32i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg16i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg8i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r32i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r16i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r8i', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba32ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba16ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgb10_a2ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rgba8ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg32ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg16ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('rg8ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r32ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r16ui', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('r8ui', vscode.CompletionItemKind.Property));
		}
		return completionItems;
	},
	resolveCompletionItem(item: vscode.CompletionItem): vscode.ProviderResult<vscode.CompletionItem> {
		return undefined;
	}
}, ' ');

const preprocessorCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		const trigger = context.triggerCharacter;
		if (trigger != "#") {
			return completionItems;
		}
		if (new RegExp("\\s*#\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('version', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('pragma', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('include', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('import', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('moj_import', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('extension', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('error', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('define', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('if', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('elif', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('undef', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('else', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('endif', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('ifdef', vscode.CompletionItemKind.Keyword));
			completionItems.push(new vscode.CompletionItem('ifndef', vscode.CompletionItemKind.Keyword));
		}
		return completionItems;
	}
}, '#');

const parenCompletionItemProvider = vscode.languages.registerCompletionItemProvider('glsl', {
	provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext): vscode.CompletionItem[] {
		const line = document.lineAt(position);
		const text = line.text.substring(0, position.character);
		const completionItems: vscode.CompletionItem[] = [];
		if (new RegExp("\\s*#pragma(\\s+[a-zA-Z_][\\w]*)+\\(\\s*").test(text)) {
			completionItems.push(new vscode.CompletionItem('on', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('off', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem('all', vscode.CompletionItemKind.Property));
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
			completionItems.push(new vscode.CompletionItem(' require', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem(' enable', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem(' warn', vscode.CompletionItemKind.Property));
			completionItems.push(new vscode.CompletionItem(' disable', vscode.CompletionItemKind.Property));
		}
		return completionItems;
	}
}, ':');

export const completionItemProviders: vscode.Disposable[] = [
	glVariableCompletionItemProvider,
	glConstantCompletionItemProvider,
	blankCompletionItemProvider,
	preprocessorCompletionItemProvider,
	parenCompletionItemProvider,
	colonCompletionItemProvider
];
