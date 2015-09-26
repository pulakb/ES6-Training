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
    yield *createRepeatingIterator(result);
}

var iterator = createCombinedIterator();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: 2, done: false }"
console.log(iterator.next());           // "{ value: "repeat", done: false }"
console.log(iterator.next());           // "{ value: "repeat", done: false }"
console.log(iterator.next());           // "{ value: "repeat", done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"

/*
* Here, the createCombinedIterator() generator delegates to createNumberIterator() and assigns the return
* value to result. Since createNumberIterator() contains return 3, the returned value is 3. The result
* variable is then passed to createRepeatingIterator() as an argument indicating how many times to yield
* the same string (in this case, three times).
*
* */