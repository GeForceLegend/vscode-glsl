'use strict';

import * as structs from './interface';

export function pushPreProcessor(document: string): structs.IParsedToken[] {
	const parsedTokens: structs.IParsedToken[] = [];
	const lines = document.split(/\r\n|\r|\n/);
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const preprocessor = new RegExp("\\s*#.*");
		if (!preprocessor.test(line)) {
			continue;
		}
		const startIndex = line.indexOf("#");
		const contents = line.split("#")[1].split(" ");
		if (contents[0] === "version") {
			parsedTokens.push({
				line: i,
				startCharacter: startIndex,
				length: 8,
				tokenType: 'keyword',
				tokenModifiers: []
			});
			if (contents.length < 2)
				continue;
			parsedTokens.push({
				line: i,
				startCharacter: line.indexOf(contents[1]),
				length: contents[1].length,
				tokenType: 'number',
				tokenModifiers: []
			});
			if (contents.length < 3)
				continue;
			parsedTokens.push({
				line: i,
				startCharacter: line.indexOf(contents[2]),
				length: contents[2].length,
				tokenType: 'parameter',
				tokenModifiers: []
			});
		}
		if (contents[0] === "pragma") {
			parsedTokens.push({
				line: i,
				startCharacter: startIndex,
				length: 8,
				tokenType: 'keyword',
				tokenModifiers: []
			});
			if (contents.length < 2)
				continue;
			const pragmaContext = contents[1].split("(");
			parsedTokens.push({
				line: i,
				startCharacter: line.indexOf(pragmaContext[0]),
				length: pragmaContext[0].length,
				tokenType: 'string',
				tokenModifiers: []
			});
			if (pragmaContext.length < 2)
				continue;
			parsedTokens.push({
				line: i,
				startCharacter: line.indexOf(pragmaContext[1]),
				length: pragmaContext[1].length - 1,
				tokenType: 'parameter',
				tokenModifiers: []
			});
		}
	}
	return parsedTokens;
}