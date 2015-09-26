/*
* you can access symbol properties using the Object.getOwnPropertySymbols() method.
* This method works exactly the same as Object.getOwnPropertyNames() except that the returned
* values are symbols rather than strings. Since symbols technically aren't property names, they
* are omitted from the result of Object.getOwnPropertyNames().
* */

var uid = Symbol.for("uid");

var object = {
    [uid]: "12345"
};

var symbols = Object.getOwnPropertySymbols(object);

console.log(symbols);
console.log(symbols.length);
console.log(symbols[0]);
console.log(object[symbols[0]]);

/*
* In this code, object has a single symbol property. The array returned from Object.getOwnPropertySymbols()
* is an array containing just that symbol.
* */