/*
* Since generators are functions, you can use the return statement both to exit early and to specify a
* return value for the last call to next(). For most of this chapter you've seen examples where the last
* call to next() on an iterator returns undefined. It's possible to specify an alternate value by using
* return as you would in any other function. In a generator, return indicates that all processing is done,
* so the done property is set to true and the value, if provided, becomes the value field. Here's an example
* that simply exits early using return
* */

function *createIterator() {
    yield 1;
    return;
    yield 2;
    yield 3;
}

let iterator = createIterator();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"

/*
* In this code, the generator has a yield statement followed by a return statement. The return indicates
* that there are no more values to come and so the rest of the yield statements will not
* execute (they are unreachable).
* */