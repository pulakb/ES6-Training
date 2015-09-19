/*
* ECMAScript 6 introduces the new.target metaproperty. A metaproperty is a property of a non-object that
* provides additional information related to its target (such as new). When a function's [[Construct]] method
* is called, new.target is filled with the target of the new operator, which is typically the constructor of the
* newly created object instance that will become this inside the function body. If [[Call]] is executed,
* then new.target is undefined. That means you can now safely detect if a function is called with new by
* checking that new.target is defined:
*
* */

function Person (name) {
    if (typeof new.target !== "undefined") {
        this.name = name;
    } else {
        throw new Error("You must use new with Person");
    }
}

var person = new Person("Ram");
var notAPerson = Person.call(person, "Mike"); // error!