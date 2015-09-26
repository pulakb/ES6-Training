/*
* When you want to create a symbol to be shared, use the Symbol.for() method instead of calling Symbol().
* The Symbol.for() method accepts a single parameter, which is a string identifier for the symbol you want
* to create
* */

var uid = Symbol.for("uid");

var object = {};

object [uid] = "12345";

console.log(object[uid]);
console.log(uid);