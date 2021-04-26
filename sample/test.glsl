Available token types:
    [comment] [string] [keyword] [number] [regexp] [operator] [namespace]
    [type] [struct] [class] [interface] [enum] [typeParameter] [function]
    [method] [macro] [variable] [parameter] [property] [label]

Available token modifiers:
    [type.declaration] [type.documentation] [type.readonly] [type.static]
    [type.abstract] [type.deprecated] [type.modification] [type.async]

Some examples:
    [class.static.token]     [type.static.abstract]
    [class.static.token]     [type.static]

    [struct]

    [function.private]

An error case:
    [notInLegend]

#version
#version 460
#version 460 core

#pragma optimize(on)
#pragma debug(off)

#extension GL_ARB_gpu_shader5 : enable

#if !defined SSAO && defined SSR

