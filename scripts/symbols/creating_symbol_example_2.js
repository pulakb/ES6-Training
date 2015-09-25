var firstName = Symbol();
var person = {};

person[firstName] = "Jon";
console.log(person[firstName]);     // "Jon"