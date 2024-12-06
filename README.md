# AlphaNum

**AlphaNum** is a lightweight JavaScript utility for encoding and decoding alphanumeric text into numeric representations. It maps letters to their positions in the alphabet and converts them back.

## Installation

Install the package using npm:

```sh
npm install alpha-num
```

Usage
Import the package in your project:

```js
const AlphaNum = require("alpha-num");
```

Encoding

Use the encode method to convert a string into its numeric representation.

```
const encoded = AlphaNum.encode('hello world');
console.log(encoded); // Output: 8-5-12-12-15 23-15-18-12-4
```

Decoding

Use the decode method to convert the encoded string back into text.

```js
const decoded = AlphaNum.decode("8-5-12-12-15 23-15-18-12-4");
console.log(decoded); // Output: hello world
```

Example

```js
const AlphaNum = require("alpha-num");

// Encode a message
const message = "npm package";
const encodedMessage = AlphaNum.encode(message);
console.log("Encoded:", encodedMessage); // Encoded: 14-16-13 16-1-3-11-1-7-5

// Decode the message
const decodedMessage = AlphaNum.decode(encodedMessage);
console.log("Decoded:", decodedMessage); // Decoded: npm package
```

Features

- Converts letters (a-z) to numeric positions (1-26).

- Handles spaces between words.

- Ignores characters that are not alphabetic.

- Case-insensitive encoding and decoding.

**Notes:-**

- Non-alphabetic characters are ignored during decoding.

- Encoding is case-insensitive, and spaces are preserved.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

**Created by:** [ArtMFM-70](https://github.com/ArtMFM-70)

## License

The code in this repository is licensed under the **Apache 2.0 License**.

[![License](https://img.shields.io/badge/License-Apache_2.0-0298c3.svg)](https://opensource.org/licenses/Apache-2.0)