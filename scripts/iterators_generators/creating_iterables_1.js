/*
* Developer-defined objects are not iterable by default, but you can make them iterable by
* using the @@iterator symbol.
* */

//TODO Need to check again - not working

var collection = {
  items: [],
    *[Symbol.iterator]() {
        yield *this.items.values();
    }
};

collection.items.push(1);
collection.items.push(2);
collection.items.push(3);

for ( var x of collection) {
    console.log(x);
}