/*
* You can access the default iterator for an object using Symbol.iterator
* */

let values = [1, 2, 3];

let iterator = values[Symbol.iterator]();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"

/*
* This code gets the default iterator for values and uses that to iterate over the values in the array.
* Knowing that Symbol.iterator specifies the default iterator, it's possible to detect if an object is iterable.
* */

function isIterable(object) {
    return typeof object[Symbol.iterator] === "function";
}

console.log(isIterable([1, 2, 3]));     // true
console.log(isIterable("Hello"));       // true
console.log(isIterable(new Map()));     // true
console.log(isIterable(new Set()));     // true

/*
* The isIterable() function simply checks to see if a default iterator exists on the object and is a function.
* This is similar to the check that the for-of loop does before executing.
* */