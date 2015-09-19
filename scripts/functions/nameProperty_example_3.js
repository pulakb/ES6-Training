/*
* There are a couple of other special cases for function names. Functions created using bind()
* will have their name prefixed with "bound" and functions created using the Function
* constructor have a name of "anonymous":
* */

var doSomething = function() {
    // ...
};

console.log(doSomething.bind().name);   // "bound doSomething"

console.log((new Function()).name);     // "anonymous"