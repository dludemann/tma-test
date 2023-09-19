const regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
const regexDecode = /<%=
		regexNamedReferenceSource
	%>|<%=
		regexLegacyReferenceSource
	%>|<%=
		regexDecimalEscapeSource
	%>|<%=
		regexHexadecimalEscapeSource
	%>|<%=
		regexAmbiguousAmpersand
	%>/g;
export const decodeHTML = (html) => {
    const options = {
        isAttributeValue: false,
        strict: false,
    };

    var strict = options.strict;
    if (strict && regexInvalidEntity.test(html)) {
        parseError('malformed character reference');
    }
    return html.replace(regexDecode, function ($0, $1, $2, $3, $4, $5, $6, $7, $8) {
        var codePoint;
        var semicolon;
        var decDigits;
        var hexDigits;
        var reference;
        var next;

        if ($1) {
            reference = $1;
            // Note: there is no need to check `has(decodeMap, reference)`.
            return decodeMap[reference];
        }

        if ($2) {
            // Decode named character references without trailing `;`, e.g. `&amp`.
            // This is only a parse error if it gets converted to `&`, or if it is
            // followed by `=` in an attribute context.
            reference = $2;
            next = $3;
            if (next && options.isAttributeValue) {
                if (strict && next == '=') {
                    parseError('`&` did not start a character reference');
                }
                return $0;
            } else {
                if (strict) {
                    parseError('named character reference was not terminated by a semicolon');
                }
                // Note: there is no need to check `has(decodeMapLegacy, reference)`.
                return decodeMapLegacy[reference] + (next || '');
            }
        }

        if ($4) {
            // Decode decimal escapes, e.g. `&#119558;`.
            decDigits = $4;
            semicolon = $5;
            if (strict && !semicolon) {
                parseError('character reference was not terminated by a semicolon');
            }
            codePoint = parseInt(decDigits, 10);
            return codePointToSymbol(codePoint, strict);
        }

        if ($6) {
            // Decode hexadecimal escapes, e.g. `&#x1D306;`.
            hexDigits = $6;
            semicolon = $7;
            if (strict && !semicolon) {
                parseError('character reference was not terminated by a semicolon');
            }
            codePoint = parseInt(hexDigits, 16);
            return codePointToSymbol(codePoint, strict);
        }

        // If we’re still here, `if ($7)` is implied; it’s an ambiguous
        // ampersand for sure. https://mths.be/notes/ambiguous-ampersands
        if (strict) {
            parseError('named character reference was not terminated by a semicolon');
        }
        return $0;
    });
};
