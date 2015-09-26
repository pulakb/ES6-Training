/*
*
* The Symbol.for() method first searches the global symbol registry to
* see if a symbol with the key "uid" exists. If so, then it returns the
* already existing symbol. If no such symbol exists, then a new symbol
* is created and registered into the global symbol registry using the specified key.
* The new symbol is then returned. That means subsequent calls to Symbol.for() using
* the same key will return the same symbol
*
* */
var uid = Symbol.for("uid");

var object = {
    [uid]: "12345"
};

console.log(object [uid]);
console.log(uid);

var uid2 = Symbol.for("uid");

console.log(uid === uid2);
console.log(object[uid2]);
console.log(uid2);