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

let friend = {
    __proto__:person
};
console.log(friend.greeting());
console.log(Object.getPrototypeOf(friend) === person);

friend.__proto__ = dog;

console.log(friend.greeting());
console.log(Object.getPrototypeOf(friend) === dog);
