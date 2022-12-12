## Changelog (release)

### 0.2.7

 - Updated completion provider, less disturbance with completion item provided by vscode itself


### 0.2.6

 - Updated file extensions

### 0.2.5

 - Improved syntax highlighting for function definiation on certain situation

### 0.2.4

 - Added syntax highlighting for glsl code blocks in markdown files

### 0.2.3

 - Deleted code snippets because of problems caused by the new version of vscode

### 0.2.2

 - Simplified code snippets, most deleted snippets should be provided by language server (though there is no plan for language server right now)

 - Beta typescript system, almost nothing useful for now

### 0.2.1

 - Added code snippets for GLSL

 - Added some missing functions from GLSL 4.6 document

### 0.1.4

 - Arrays can be used as function parameters now

### 0.1.3

 - Arrays can be used as function return values now

### 0.1.2

 - Added more syntaxes for #if and #elif logical expressions

 - Added more syntaxes (Function calls, preprocessors and comments) for array indexes

### 0.1.1

 - Fixed wrong syntax when using arrays as function parameter

### 0.1.0

 - Added syntax for `#pragma` and `#line`

 - Added syntax for `#if defined ... ||/&& defined ...` defination preprocessors

 - Fixed function calling not highlighted when at the top of a line

### 0.0.9

 - Fixed comments in function define parameters part

### 0.0.8

 - Added syntax for floats with `lf/LF` ending

 - Fixed illegal syntax of using an array element as an index of another array

 - Added builtin-types `(i|u)?texture[1-3]D(Array)?...` for Vulkan

 - Added some modifiers from OpenGL Shading Language 4.6 document

### 0.0.7

 - Added syntax for `#moj_import` in Minecraft 21w10a.

 - Added syntax for `highp|mediump|lowp` in function define parameter part.

### 0.0.6

 - When defining functions, `const/in/out/inout` no longer need a type behind them to get highlighted.

### 0.0.5

 - Added comment syntax for "`\`" (makes next line be commit if at end of a line).

### 0.0.4

 - Fixed syntax for `gl_((ModelView)?(Projection)?|Texture)Matrix(Inverse)?(Transpose)?`

### 0.0.3

 - Fixed spelling mistake of `gl_FragDepth`.

 - Added lots of built-in functions, variables and constants from OpenGL 4.6 document.

### 0.0.2

 - Fixed highlighting of `#(el)if !defined`.

 - Fixed `.rgba/xyzw/stpq` wrongly applied to struct elements.

 - Fixed struct was highlighted even in words.

 - Added invalid syntax for GLSL reserved variable names (begin with `gl_` but still not an available variable yet).

### 0.0.1

 - Publish this pack.
