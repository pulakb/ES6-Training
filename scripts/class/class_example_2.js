// ES5
/*
function PersonType(name) {
    this.name = name;
}

PersonType.prototype.sayName = function() {
    console.log(this.name);
};

let person = new PersonType("Jon");
person.sayName();   // outputs "Jon"

console.log(person instanceof PersonType);  // true
console.log(person instanceof Object);      // true
*/

// ES6 - Class Expression



let PersonClass = class {
    constructor (name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
};

let person = new PersonClass('Jon');
person.sayName();

console.log(person instanceof PersonClass);
console.log(person instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);

/*
 *
 Classes and functions are similar in that they have two forms: declarations and expressions.
 Function and class declarations begin with an appropriate keyword (function or class, respectively)
 followed by an identifier. Functions have an expression form that doesn't require an identifier after
 function, and similarly, classes have an expression form that doesn't require an identifier after class.

 These class expressions are designed to be used in variable declarations or passed into functions as arguments.
 Here's the class expression equivalent of the previous examples:
 */