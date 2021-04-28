Available token types:
    [comment] [string] [keyword] [number] [regexp] [operator] [namespace]
    [type] [struct] [class] [interface] [enum] [typeParameter] [function]
    [method] [macro] [variable] [parameter] [property] [label]

Available token modifiers:
    [type.declaration] [type.documentation] [type.readonly] [type.static]
    [type.abstract] [type.deprecated] [type.modification] [type.async]

#version
#version 460
#version 460 core

#pragma optimize(on)
#pragma debug(off)

#extension GL_ARB_gpu_shader5 : enable

#if !defined SSAO && defined SSR

layout (location = 0) in vec3 POSITION;

void SetVoxelTint(inout vec4[2] voxel, vec3 tint) {
	voxel[0].rgb = tint;
}

void SetVoxelId(inout vec4[2] voxel, int id) {
	voxel[0].a = 1.0 - id / 255.0;
}

// SpecularData LabPBR(vec4 texData)
// {
//     SpecularData specularData;
//     specularData.smoothness = texData.r;
//     specularData.metalness = texData.g;
//     specularData.porosity = texData.b;
//     specularData.emissive = texData.a - step(1.0, texData.a);
//     return specularData;
// }

SpecularData LabPBR(vec4 texData)
{
    // texData
    /* texData */
    texData
    atexData
    texDataa
    SpecularData specularData;
    specularData.smoothness = texData.r;
    specularData.metalness = texData.g;
    specularData.porosity = texData.b;
    specularData.emissive = texData.a - step(1.0, texData.a);
    return specularData;
}