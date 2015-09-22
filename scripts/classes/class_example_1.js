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

// ES6



class PersonClass {
    constructor (name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass('Jon');
person.sayName();

console.log(person instanceof PersonClass);
console.log(person instanceof Object);

console.log(typeof PersonClass);
console.log(typeof PersonClass.prototype.sayName);

/*
 *
 Class declarations, unlike function declarations, are not hoisted. Class declarations act like let declarations
 and so exist in the temporal dead zone until execution reaches the declaration.

 All code inside of classes declarations runs in strict mode automatically. There's no way to opt-out of strict
 mode inside of classes.

 All methods are non-enumerable. This is a significant change from custom types, where you need to use
 Object.defineProperty() to make a method non-enumerable.

 Calling the classes constructor without new throws an error.

 Attempting to overwrite the classes name within a classes method throws an error.
 */