//// [tests/cases/conformance/jsdoc/declarations/jsDeclarationsReexportedCjsAlias.ts] ////

//// [lib.js]
/**
 * @param {string} a
 */
function bar(a) {
    return a + a;
}

class SomeClass {
    a() {
        return 1;
    }
}

module.exports = {
    bar,
    SomeClass
}
//// [main.js]
const { SomeClass, SomeClass: Another } = require('./lib');

module.exports = {
    SomeClass,
    Another
}

//// [lib.js]
/**
 * @param {string} a
 */
function bar(a) {
    return a + a;
}
var SomeClass = /** @class */ (function () {
    function SomeClass() {
    }
    SomeClass.prototype.a = function () {
        return 1;
    };
    return SomeClass;
}());
module.exports = {
    bar: bar,
    SomeClass: SomeClass
};
//// [main.js]
var _a = require('./lib'), SomeClass = _a.SomeClass, Another = _a.SomeClass;
module.exports = {
    SomeClass: SomeClass,
    Another: Another
};


//// [lib.d.ts]
/**
 * @param {string} a
 */
export function bar(a: string): string;
export class SomeClass {
    a(): number;
}
//// [main.d.ts]
import { SomeClass } from "lib";
import { SomeClass as Another } from "lib";
export { SomeClass, Another };


//// [DtsFileErrors]


out/main.d.ts(1,27): error TS2307: Cannot find module 'lib' or its corresponding type declarations.
out/main.d.ts(2,38): error TS2307: Cannot find module 'lib' or its corresponding type declarations.


==== out/main.d.ts (2 errors) ====
    import { SomeClass } from "/.src/lib";
                              ~~~~~~~~~~~
!!! error TS2307: Cannot find module 'lib' or its corresponding type declarations.
    import { SomeClass as Another } from "/.src/lib";
                                         ~~~~~~~~~~~
!!! error TS2307: Cannot find module 'lib' or its corresponding type declarations.
    export { SomeClass, Another };
    
==== out/lib.d.ts (0 errors) ====
    /**
     * @param {string} a
     */
    export function bar(a: string): string;
    export class SomeClass {
        a(): number;
    }
    