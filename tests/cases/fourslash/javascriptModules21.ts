/// <reference path='fourslash.ts'/>
// @allowJs: true
// @allowTs: true
// @module: system

// @Filename: mod.js
//// function foo() { return {a: true}; }
//// module.exports = foo();

// @Filename: app.js
//// import mod from "./mod"
//// mod./**/

goTo.marker();
verify.completionListContains('a');
