let person = {
  greeting() {
    return "hello";
  }
};

let dog = {
    greeting() {
        return "hi";
    }
};

/*let friend = {
    __proto__:person,
    greeting() {
        return Object.getPrototypeOf(this).greeting.call(this) + ", Friend";
    }
};*/

let friend = {
    __proto__: person,
    greeting() {
        // in the previous example, this is the same as:
        // 1. Object.getPrototypeOf(this).getGreeting.call(this)
        // 2. this.__proto__.greeting.call(this)
        return super.greeting() + ", hi!";
    }
};
console.log(friend.greeting());
console.log(Object.getPrototypeOf(friend) === person);

/*
* The call to super.getGreeting() is the same as Object.getPrototypeOf(this).getGreeting.call(this) or
* this.__proto__.getGreeting.call(this). Similarly, you can call any method on an object's prototype
* by using a super reference.
* */