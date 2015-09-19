// With argument
var reflect = value => value;
console.log(reflect(10));

// With multiple argument
var add = (arg1, arg2) => arg1 + arg2;
console.log(add(10, 12));

// Giving traditional function body
var add = (arg1, arg2) => {
    return arg1 + arg2;
};
console.log(add(10, 12));

// Without argument
var getName = () => "Pulak";
console.log(getName());

/*
* Because curly braces are used to denote the function's body, an arrow function that wants to return
* an object literal outside of a function body must wrap the literal in parentheses.
* */

var getTempId = (id) => ({id: id, name: "Temp"});
console.log(getTempId(10));

// IIFE
let person = ((name) => {
        return {
          getName () {
                return name;
            }
        };
})("Pulak");

console.log(person.getName());

/*
* Note that the location of the parentheses is around just the arrow function definition, and
* does not include ("Pulak"). This is different from a formal function, where the parentheses
* can be placed outside of the passed-in parameters as well as just as around the function definition.
*
* */