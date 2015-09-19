"use strict";

if (true) {

    console.log(typeof doSomething);        // "function"

    function doSomething() {
        // ...
    }

    doSomething();
}

console.log(typeof doSomething);            // "undefined"

/*
* Block level functions are hoisted to the top of the block in which they are defined, so typeof doSomething
* returns "function" even though it appears before the function declaration in the code. Once the if block is
* finished executing, doSomething() no longer exists.
* */