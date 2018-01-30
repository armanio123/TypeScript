/// <reference path="fourslash.ts" />

// @allowJs: true
// @allowTs: true
// @Filename: a.js
//// function foo(...a) {}

verify.getSemanticDiagnostics(`[]`);
