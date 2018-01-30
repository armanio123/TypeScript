/// <reference path='fourslash.ts'/>

// @allowJs: true
// @allowTs: true
// @Filename: foo.js
/////*2*/module.exports = {};

// @Filename: bar.js
////var x = require([|/*1*/"./foo"|]);

verify.goToDefinition("1", "2");
