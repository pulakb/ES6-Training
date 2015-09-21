//ES5
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}

//ES6
function createPerson(name, age) {
    return {
        name,
        age
    };
}