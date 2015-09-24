// export data
export var color = "red";
export let name = "Jon";
export const magicNumber = 7;

// export function
export function sum(num1, num2) {
    return num1 + num2;
}

// export class
export class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea () {
        return this.width * this.length;
    }
}

// this function is private to the module
function subtract(num1, num2) {
    return num1 - num2;
}

export function multiply(num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1/num2;
}

export { divide as bhag };