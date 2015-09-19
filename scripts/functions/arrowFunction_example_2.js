//Lexical Binding

//--- Problem

/*
var PageHandler = {

    id: "123456",

    init: function() {
        document.addEventListener("click", function(event) {
            this.doSomething(event.type);     // error
        }, false);
    },

    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};
*/

//Solution - 1: ES5

/*var PageHandler = {
  id: "123456",

  init: function () {
      document.addEventListener('click', (function (event) {
        this.doSomething(event.type);
      }).bind(this), false);
  },

  doSomething: function (type) {
        console.log("Handling " + type + " for " + this.id);
  }
};*/

// Solution -2: ES6
/*
* Arrow functions have implicit this binding, which means that the value of this inside of an arrow
* function is always the same as the value of this in the scope in which the arrow function was defined.
*
* The event handler in this example is an arrow function that calls this.doSomething(). The value of this
* is the same as it is within init(), so this version of the example works similarly to the one using bind().
* Even though the doSomething() method doesn't return a value, it is still the only statement executed necessary
* for the function body and so there is no need to include braces.
*
* */
var PageHandler = {
  id: "123456",

    init: function () {
        document.addEventListener("click", event => {
            this.doSomething(event.type);
        }, false);
    },

    doSomething: function (type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler.init();

/*
* Generally speaking, arrow functions are designed to be used in places where anonymous functions have
* traditionally been used. They are not really designed to be kept around for long periods of time,
* hence the inability to use arrow functions as constructors. Arrow functions are best used for
* callbacks that are passed into other functions, as seen in the examples in this section.
*
*
* The biggest change to functions in ECMAScript 6 was the addition of arrow functions.
* Arrow functions are designed to be used in places where anonymous function expressions have
* traditionally been used. Arrow functions have a more concise syntax, lexical this binding,
* and no arguments object. Additionally, arrow functions can't change their this binding and so can't be
* used as constructors.
* */