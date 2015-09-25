/*
* The basic idea is to map a value to a unique key in such a way that you can retrieve that value at any point in
* time by using the key. In JavaScript, developers have traditionally used regular objects as a replacement for maps.
* In fact, JSON is based on the premise that objects represent key-value pairs. However, the same limitation
* that affects objects used as sets also affects objects used as maps: the inability to have non-string keys.
*
*
*
* The ECMAScript 6 Map type is an ordered list of key-value pairs where both the key and the value can be of any type.
* A key of 5 is different than a key of "5", and keys are determined to be the same using Object.is(). You can store
* and retrieve data from a map using the set() and get() methods, respectively
* */

var map = new Map();
map.set("name", "Jon");

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "Jon"
console.log(map.size);        // 1

map.delete("name");
console.log(map.has("name"));   // false
console.log(map.get("name"));   // undefined
console.log(map.size);        // 0

/*
* In order to make it easier to add large amounts of data into a map, you can pass an array of arrays
* to the Map constructor.
* */

var map = new Map([ ["name", "Jon"], ["title", "mr"]]);

console.log(map.has("name"));   // true
console.log(map.get("name"));   // "Jon"
console.log(map.has("title"));  // true
console.log(map.get("title"));  // "mr"
console.log(map.size);        // 2