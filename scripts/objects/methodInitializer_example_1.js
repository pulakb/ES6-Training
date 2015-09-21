//ES5
var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

//ES6
var person = {
    name: "Nicholas",
    sayName() {
    console.log(this.name);
    }
};