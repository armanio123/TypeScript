// @noEmit: true
// @allowJs: true
// @allowTs: true
// @checkJs: true
// @skipLibCheck: true
// @lib: es2017, dom
// @Filename: foo.js
// Repro for #16585
const x = {
    bar() {
        setTimeout(function() { arguments }, 0);
    }
}
