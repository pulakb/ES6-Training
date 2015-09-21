// ES5 way

/*function PersonType(name) {
    this.name = name;
}

//Static method
PersonType.create = function (name) {
    return new PersonType(name);
}

// instance method
PersonType.prototype.sayName = function () {
    console.log(this.name);
}

var person = PersonType.create('Jon');
person.sayName();*/

//ES6 way

class PersonType {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }

    static create (name) {
        return new PersonType(name);
    }
}

let person = PersonType.create('Jon');
person.sayName();

/*
* The PersonClass definition defines a single static method called create() by adding the static keyword.

 You can use the static keyword on any method or accessor property definition within a class. The only restriction
 is that you cannot use static with the constructor method definition.

 Just as with other class members, static members are not enumerable by default.
* */