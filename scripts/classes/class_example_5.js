/*
* Another interesting use of class expressions is to create singletons by immediately
* invoking the class constructor. To do so, you must use new with a class expression and
* include parentheses at the end.
* */

let person = new class {

    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }

}("Jon");

person.sayName();       // "Nicholas"

/*
* Here, the anonymous classes expression is created and then executed immediately. This pattern allows you
* to use the classes syntax for creating singletons without leaving a classes reference available for inspection.
* The parentheses at the end are the indicator that you're calling a function while also allowing you to pass
* in an argument.
* */