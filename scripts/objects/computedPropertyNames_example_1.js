var lastName = "last name";

var person = {
    "first name": "Oliver",
    [lastName]: "Silver"
};

console.log(person["first name"]);      // "Oliver"
console.log(person[lastName]);          // "Silver"

var suffix = " name";

var person = {
    ["first" + suffix]: "Oliver",
    ["last" + suffix]: "Silver"
};

console.log(person["first name"]);      // "Oliver"
console.log(person["last name"]);       // "Silver"