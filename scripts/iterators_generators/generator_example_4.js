//Generator Object Methods
"use strict";

var o = {
    *createIterator(items) {
        for (var i = 0; i < items.length; i++) {
            yield items[i];
        }
    }
};


var iterator = o.createIterator([1,2,3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());