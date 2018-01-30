// @noEmit: true
// @allowJs: true
// @allowTs: true
// @checkJs: true

// @Filename: def.js
var Outer = {};

// @Filename: a.js
Outer.Inner = class {
    constructor() {
        /** @type {number} */
        this.y = 12
    }
}

// @Filename: b.js
/** @type {Outer.Inner} */
var x;
x.y
