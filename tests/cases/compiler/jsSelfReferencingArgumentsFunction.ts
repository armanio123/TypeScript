// @Filename: foo.js
// @noEmit: true
// @allowJs: true
// @allowTs: true
// Test #16139
function Foo() {
    arguments;
    return new Foo();
}
