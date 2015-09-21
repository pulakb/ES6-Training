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

let friend = Object.create(person);
console.log(friend.greeting());
console.log(Object.getPrototypeOf(friend) === person);

Object.setPrototypeOf(friend, dog);
console.log(friend.greeting());
console.log(Object.getPrototypeOf(friend) === dog);
