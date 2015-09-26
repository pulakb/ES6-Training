/*
* Generator delegation also lets you use make of generator return values (as seen in the previous section).
* This is the easiest way to access such returned values and can be quite useful in performing complex tasks.
* */

function *createNumberIterator() {
    yield 1;
    yield 2;
    return 3;
}

function *createRepeatingIterator(count) {
    for (let i=0; i < count; i++) {
        yield "repeat";
    }
}

function *createCombinedIterator() {
    let result = yield *createNumberIterator();
    yield result;
    yield *createRepeatingIterator(result);
}

var iterator = createCombinedIterator();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: 3, done: false }"
console.log(iterator.next());           // "{ value: "repeat", done: false }"
console.log(iterator.next());           // "{ value: "repeat", done: false }"
console.log(iterator.next());           // "{ value: "repeat", done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"

/*
* In this code, the extra yield statement explicitly outputs the returned value from createNumberIterator().

 Generator delegation using the return value is a very powerful paradigm that allows for some very interesting
 possibilities, especially when used in conjunction with asynchronous operations.
* */