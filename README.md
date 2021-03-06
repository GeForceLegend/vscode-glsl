# GLSL Syntax for VS Code
[![Marketplace Version](https://vsmarketplacebadge.apphb.com/version/geforcelegend.vscode-glsl.svg)](https://marketplace.visualstudio.com/items/geforcelegend.vscode-glsl)
[![installs](https://vsmarketplacebadge.apphb.com/installs/geforcelegend.vscode-glsl.svg)](https://marketplace.visualstudio.com/items/geforcelegend.vscode-glsl)
[![license](https://img.shields.io/github/license/GeforceLegend/vscode-glsl.svg)](https://github.com/GeForceLegend/vscode-glsl/blob/master/LICENSE)
[![issues](https://img.shields.io/github/issues/GeforceLegend/vscode-glsl.svg)](https://github.com/GeForceLegend/vscode-glsl/issues)

## vscode-glsl

vscode-glsl is a light weighted GLSL (OpenGL Shading Language) syntax highlighting extension for Visual Studio Code. 

This extension is designed to provide a better syntax for GLSL, and uses lots of expressions form [euler0's sublime-glsl](https://github.com/euler0/sublime-glsl), a GLSL syntax package for Sublime Text3, provides almost the best GLSL syntax I have ever seen.

This extension is still in early development, and may become buggy in some situation. Feel free to [report issues](https://github.com/GeForceLegend/vscode-glsl/issues)!

## Features

 - Syntax highlighting for `GLSL`.

 - Some syntax for Minecraft shaderpacks made for [Optifine](https://www.optifine.net) (e.g. /* DRAWBUFFERS:0 */ output).

## Syntax

### The belowing image provides an example syntax highlighting with Monokai color theme.

![syntax](https://s3.ax1x.com/2021/03/01/6PdbLj.png)

## Changelog (in dev)

 - Added comment syntax for "\" (makes next line be commit if at end of a line).

## Changelog (release)

### 0.0.4

 - Fixed syntax for gl_((ModelView)?(Projection)?|Texture)Matrix(Inverse)?(Transpose)?

### 0.0.3

 - Fixed spelling mistake of gl_FragDepth

 - Added lots of built-in functions, variables and constants from OpenGL 4.6 document

### 0.0.2

 - Fixed highlighting of #(el)if !defined

 - Fixed .rgba/xyzw/stpq wrongly applied to struct elements

 - Fixed struct was highlighted even in words

 - Added invalid syntax for GLSL reserved variable names (begin with gl_ but still not an available variable yet)

### 0.0.1

 - Publish this pack
