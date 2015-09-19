/*
* the specification defines two different internal-only methods for functions: [[Call]] and [[Construct]].
* When a function is called without new, the [[Call]] method is executed, which executes the body of the
* function as it appears in the code. When a function is called with new, that's when the [[Construct]]
* method is called. The [[Construct]] method is responsible for creating a new object, called the new target,
* and then executing the function body with this set to the new target. Functions that have a [[Construct]] method
* are called constructors.

 I> Keep in mind that not all functions have [[Construct]], and therefore not all functions can be called
 with new. Arrow functions, discussed later in this chapter, do not have a [[Construct]] method.
* */

function Person(name) {
    if (this instanceof Person) {
        this.name = name;   // using new
        console.log(this.name);
    } else {
        throw new Error("You must use new with Person.")
    }
}

var person = new Person("Nicholas");
//var notAPerson = Person("Nicholas");  // throws error
var notAPerson = Person.call(person, "Michael");    // works!