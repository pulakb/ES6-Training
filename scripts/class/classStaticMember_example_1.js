//ES6
class Rectangle {
    constructor (length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

let methodName = "getArea";

class Square extends Rectangle {
    constructor (length) {
        super(length, length);
    }

    [methodName]() {
        return super.getArea();
    }
}

var square = new Square(10, 10);
console.log(square.getArea());              // 100

// Class methods can have computed names, just like computed names in object literals,
// by using square brackets around an expression.