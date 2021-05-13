#version
#version 460
#version 460 core

#import "/lib/test1"
#import </lib/test1>

#pragma optimize(on)
#pragma debug(off)
#pragma STDGL invariant(all)

#extension GL_ARB_gpu_shader5 : enable

#if !defined SSAO && defined SSR

layout (location = 0) in vec3 POSITION;

uniform sampler2D colortex1;

void SetVoxelTint(inout vec4[2] voxel, vec3 tint) {
	voxel[0].rgb = tint;
}

void SetVoxelId(inout vec4[2] voxel, int id) {
	voxel[0].a = 1.0 - id / 255.0;
}