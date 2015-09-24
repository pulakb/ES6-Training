//ES5 way

function createIterator (items) {
    var i = 0;

    return {
        next: function () {
            var done = (i >= items.length);
            var value = !done ? items[i++] : undefined;


            return {
                done: done,
                value: value
            }
        }
    };
}

var iterator = createIterator([1,2,3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
* The createIterator() function in this example returns an object with a next() method.
* Each time the method is called, the next value in the items array is returned as value.
* When i is 3, items[i++] returns undefined and done is true, which fulfills the special
* last case for iterators in ECMAScript 6.
*
* */