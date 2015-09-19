"use strict";

if (true) {

    console.log(typeof doSomething);        // throws error

    let doSomething = function () {
        // ...
    }

    doSomething();
}

console.log(typeof doSomething);

/*
* Block level functions are a similar to let function expressions in that the function definition is removed
* once execution flows out of the block in which it's defined. The key difference is that block level functions
* are hoisted to the top of the containing block while let function expressions are not hoisted.
*
* Whether you want to use block level functions or let expressions depends on whether or not you want
* the hoisting behavior.
* */