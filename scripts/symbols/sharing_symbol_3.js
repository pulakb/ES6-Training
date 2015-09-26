/*
*
* unique aspect of shared symbols is that you can retrieve the key associated with a symbol
* in the global symbol registry by using Symbol.keyFor()
*
* */

var uid = Symbol.for("uid");
console.log(Symbol.keyFor(uid));

var uid2 = Symbol.for("uid");
console.log(Symbol.keyFor(uid2));

var uid3 = Symbol("uid");
console.log(Symbol.keyFor(uid3));

/*
* Notice that both uid and uid2 return the key "uid". The symbol uid3 doesn't
* exist in the global symbol registry, so it has no key associated with it and
* Symbol.keyFor() returns undefined.
* */