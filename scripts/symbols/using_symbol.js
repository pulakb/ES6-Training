/*
* You can use symbols anywhere you would use a computed property name. You've already seen the use of
* bracket notation in the previous sections, but you can use symbols in computed object literal property
* names as well as with Object.defineProperty(), and Object.defineProperties()
*
* */
var firstName = Symbol("first name");
var person = {
    [firstName]: "John"
};

//Read only Property
Object.defineProperty(person, firstName, {writable: false});

var lastName = Symbol("last name");

Object.defineProperties(person, {
    [lastName] : {
        value: "deep",
        writable: false
    }
});


console.log(person);
console.log(person[firstName]);
console.log(person[lastName]);