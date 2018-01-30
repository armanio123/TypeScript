/// <reference path='fourslash.ts'/>

// @allowJs: true
// @allowTs: true
// @Filename: a.js
////var C = class  {
////}
////C.[|staticProperty|] = "string";
////console.log(C.[|staticProperty|]);

verify.rangesAreRenameLocations();
