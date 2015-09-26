class MyClass {

    *createIterator(items) {
        for (let i=0; i < items.length; i++) {
            yield items[i];
        }
    }

}

let o = new MyClass();
let iterator = o.createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());