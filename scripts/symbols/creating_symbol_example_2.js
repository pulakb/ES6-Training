/*
* The Symbol function accepts an optional argument that is the description of the symbol.
* The description itself cannot be used to access the property but is used for debugging purposes.
* */
var firstName = Symbol("first name");
var person = {};

person[firstName] = "Jon";

console.log("first name" in person);     // "Jon"
console.log(person[firstName]);
console.log(firstName);
console.log(person);