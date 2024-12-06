const AlphaNum = require("./alpha-num");

const encoded = AlphaNum.encode("hello world");
console.log("Encoded:", encoded); // Output: 8-5-12-12-15 23-15-18-12-4

const decoded = AlphaNum.decode(encoded);
console.log("Decoded:", decoded); // Output: hello world