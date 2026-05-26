// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.

// --- caesarEncrypt ---
control.assert(Encryption.caesarEncrypt("Hello", 3) === "Khoor", "encrypt basic uppercase+lowercase");
control.assert(Encryption.caesarEncrypt("xyz", 3) === "abc", "encrypt wrap-around");
control.assert(Encryption.caesarEncrypt("Hello, World!", 0) === "Hello, World!", "encrypt zero offset");
control.assert(Encryption.caesarEncrypt("Hello", -3) === "Ebiil", "encrypt negative offset");
control.assert(Encryption.caesarEncrypt("Hello", 29) === "Khoor", "encrypt offset > 26 normalised");
control.assert(Encryption.caesarEncrypt("Hello, World!", 3) === "Khoor, Zruog!", "encrypt non-letters unchanged");

// --- caesarDecrypt ---
control.assert(Encryption.caesarDecrypt("Khoor", 3) === "Hello", "decrypt basic");
control.assert(Encryption.caesarDecrypt("abc", 3) === "xyz", "decrypt wrap-around");
control.assert(Encryption.caesarDecrypt("Hello, World!", 0) === "Hello, World!", "decrypt zero offset");

// --- round-trip ---
let original = "The Quick Brown Fox!";
control.assert(Encryption.caesarDecrypt(Encryption.caesarEncrypt(original, 13), 13) === original, "round-trip offset 13");
control.assert(Encryption.caesarDecrypt(Encryption.caesarEncrypt(original, 7), 7) === original, "round-trip offset 7");
control.assert(Encryption.caesarDecrypt(Encryption.caesarEncrypt(original, -5), -5) === original, "round-trip negative offset");

basic.showString("OK");
