// @module: commonjs
// @allowJs: true
// @allowTs: true
// @outDir: ./out/

// @filename: app.js
function require(a) {
    return a;
}

const fs = require("fs");
const text = fs.readFileSync("/a/b/c");