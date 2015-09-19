/* ECMAScript 6 also allows block-level functions in nonstrict mode, but the behavior is slightly different.
  Instead of hoisting these declarations to the top of the block, they are hoisted all the way to the
  containing function or global environment.
 */

// ECMAScript 6 behavior
if (true) {

    console.log(typeof doSomething);        // "function"

    function doSomething() {
        // ...
    }

    doSomething();
}

console.log(typeof doSomething);            // "function"

/*
* In this example, doSomething() is hoisted into the global scope so that it still exists outside of the if block.
* ECMAScript 6 standardized this behavior to remove the incompatible browser behaviors that previously existed.
 * ECMAScript 6 runtimes will all behave in the same way.
* */