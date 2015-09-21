let person = {
    getGreeting() {
    return "Hello";
}
};

// prototype is person
let friend = {
    __proto__: person,
    getGreeting() {
    return super.getGreeting() + ", hi!";
}
};

// prototype is friend
let relative = {
    __proto__: friend
};

console.log(person.getGreeting());                  // "Hello"
console.log(friend.getGreeting());                  // "Hello, hi!"

console.log(relative.getGreeting());                // "Hello, hi!"

/*
* Because super references are not dynamic, they always refer to the correct object. In this case,
* super.getGreeting() always refers to person.getGreeting(), regardless of how many other object inherit this method.
* */