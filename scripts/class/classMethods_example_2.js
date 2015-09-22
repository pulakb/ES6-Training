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

class Square extends Rectangle {
    constructor (length) {
        super(length, length);
    }

    getArea() {
        return super.getArea();
    }
}

var square = new Square(10, 10);
console.log(square.getArea());              // 100

// Overriding Parent class method