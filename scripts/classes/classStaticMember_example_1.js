//ES6
class Rectangle {
    constructor (length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    static create (length, width) {
        return new Rectangle(length, width);
    }
}


class Square extends Rectangle {
    constructor (length) {
        super(length, length);
    }
}

var rect = Square.create(10, 10);
console.log(rect instanceof Rectangle);
console.log(rect.getArea());              // 100
console.log(rect instanceof Square);

/*
* If a base classes has static members then those static members are also available on the derived classes.
* This maps to how inheritance works in other languages, but is a new concept for JavaScript.
* */