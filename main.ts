/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100 block="Encryption"
//% block.loc.de="Verschlüsselung"
namespace Encryption {
    /**
     * Encrypts a string using the Caesar cipher by shifting
     * each letter by the given offset. Non-letter characters
     * are left unchanged.
     * @param text the input string to encrypt
     * @param offset the number of positions to shift each letter
     */
    //% block="caesar cipher encrypt $text with offset $offset"
    //% block.loc.de="Caesar-Verschlüsselung $text mit Versatz $offset"
    //% jsdoc.loc.de="Verschlüsselt einen Text mit der Caesar-Verschlüsselung, indem jeder Buchstabe um den angegebenen Versatz verschoben wird. Nicht-Buchstaben bleiben unverändert."
    //% text.loc.de="Der zu verschlüsselnde Text"
    //% offset.loc.de="Die Anzahl der Positionen, um die jeder Buchstabe verschoben wird"
    //% text.defl="Hello"
    //% offset.min=-25 offset.max=25 offset.defl=3
    export function caesarEncrypt(text: string, offset: number): string {
        let result = "";
        // Normalise offset to 0-25 range, supporting negative shifts
        const shift = ((offset % 26) + 26) % 26;
        for (let i = 0; i < text.length; i++) {
            const code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                // Uppercase A-Z
                result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                // Lowercase a-z
                result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
            } else {
                // Non-letter characters pass through unchanged
                result += text.charAt(i);
            }
        }
        return result;
    }
}