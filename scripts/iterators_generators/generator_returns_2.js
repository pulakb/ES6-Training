/*
* You can also specify a return value that will end up in the value field of the returned object.
* */

function *createIterator() {
    yield 1;
    return 42;
}

let iterator = createIterator();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 42, done: true }"
console.log(iterator.next());           // "{ value: undefined, done: true }"
/*
* the value 42 is returned in the value field on the second call to next() (which is the first time that done is true).
* The third call to next() returns an object whose value property is once again undefined. Any value you specify
* with return is only available on the returned object one time before the value field is reset to undefined.
* */