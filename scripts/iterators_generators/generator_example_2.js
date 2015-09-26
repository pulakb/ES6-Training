function *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
        yield items[i];
    }
}

let iterator = createIterator([1,2,3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
* In this example, an array is used in a for loop, yielding each item as the loop progresses.
* Each time yield is encountered, the loop stops, and each time next() is called on iterator,
* the loop picks back up where it left off.

* Generator functions are an important part of ECMAScript 6, and since they are just functions,
* they can be used in all the same places.
*
* */