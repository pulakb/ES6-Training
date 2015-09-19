function Person(name) {
    if (typeof new.target === Person) {
        this.name = name; // using new
        console.log(name);
    } else {
        throw new Error('You must use the new Person');
    }
}

function AnotherPerson (name) {
    Person.call(this, name);
}

var person = new Person('Nicole');
var anotherPerson = new AnotherPerson('Jon');

/*
* In this example, new.target must be Person in order to work correctly. When new AnotherPerson("Nicholas")
* is called, new.target is set to AnotherPerson, so the subsequent call to Person.call(this, name) will
* throw an error even though new.target is defined.
* */