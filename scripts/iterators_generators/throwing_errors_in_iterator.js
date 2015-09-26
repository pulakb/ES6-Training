function *createIterator() {
    let first = yield 1;
    let second;

    try {
        second = yield first +2;
    } catch (ex) {
        second = 6;
    }

    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next(4));          // "{ value: 6, done: false }"
console.log(iterator.throw(new Error("Boom")));    // "{ value: 9, done: false }"
console.log(iterator.next());

/*
* In this example, a try-catch block is wrapped around the second yield statement.
* While this yield executes without error, the error is thrown before any value can be assigned to second,
* so the catch block assigns it a value of six. Execution then flows to the next yield and returns nine.

 You'll also notice something interesting happened - the throw() method returned a value similar to that
 returned by next(). Because the error was caught inside the generator, code execution continued on to the
 next yield and returned the appropriate value.

 It helps to think of next() and throw() as both being instructions to the iterator: next() instructs the
 iterator to continue executing (possibly with a given value) and throw() instructs the iterator to continue
 executing by throwing an error. What happens after that point depends on the code inside the generator.
*
* */