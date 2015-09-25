/*
* A generator is a special kind of function that returns an iterator.
* Generator functions are indicated by inserting a star character (*) after the function
* keyword (it doesn't matter if the star is directly next to function or if there's some
* whitespace between them). The yield keyword is used inside of generators to specify the
* values that the iterator should return when next() is called.
*
* */

function *createIterator() {
    yield 1;
    yield 2;
    yield 3;
}

let iterator = createIterator();

for ( let i of iterator) {
    console.log(i);
}