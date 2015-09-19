/*
* In this example, doSomething.name is "doSomethingElse" because the function expression itself
* has a name and that name takes priority over the variable to which the function was assigned.
* */

var doSomething = function doSomethingElse() {
    // ...
};

var person = {
    sayName: function() {
        console.log(this.name);
    }
}

console.log(doSomething.name);      // "doSomethingElse"
console.log(person.sayName.name);   // "sayName"