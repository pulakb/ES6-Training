function Rectangle(length, width) {
    this.length = length;
    this.width = width;
}

Rectangle.prototype.getArea = function () {
    return this.length * this.width;
};

class Square extends Rectangle {
    constructor (length, width) {
        super(length, width);
    }
}

let seq = new Square(10, 10);

console.log(seq.getArea());
console.log(seq instanceof Square);
console.log(seq instanceof Rectangle);

/*
* Perhaps the most powerful aspect of derived classes in ECMAScript 6 is the ability to derive
* a classes from an expression. You can use extends with any expression, and if the expression
* resolves to a function with [[Construct]] and a prototype, the classes will work.
* */