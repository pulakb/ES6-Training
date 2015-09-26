function *createIterator() {
    let first = yield 1;
    let second = yield first +2;
    yield second + 3;
}

let iterator = createIterator();

console.log(iterator.next());           // "{ value: 1, done: false }"
console.log(iterator.next(4));          // "{ value: 6, done: false }"
console.log(iterator.next(5));          // "{ value: 8, done: false }"
console.log(iterator.next());           // "{ value: undefined, done: true }"

/*
* The first call to next() is a special case where any argument passed to it is lost.
* Since arguments passed to next() become the value returned by yield, there would have to be a way
* to access that argument before the first yield in the generator function. That's not possible,
* so there's no reason to pass an argument the first time next() is called.

 On the second call to next(), the value 4 is passed as the argument. The 4 ends up assigned to the
 variable first inside the generator function. In a yield statement including an assignment the right
 side of the expression is evaluated on the first call to next() and the left side is evaluated on the
 second call to next() before the function continues executing. Since the second call to next() passes
 in 4, that value is assigned to first and then execution continues.

 The second yield uses the result of the first yield and adds two, which means it returns a value of
 six. When next() is called a third time, the value 5 is passed as an argument. That value is assigned
 to the variable second and then used in the third yield statement to return eight.
* */