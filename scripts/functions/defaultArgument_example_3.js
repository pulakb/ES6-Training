let value = 5;

function getValue (arg) {
    return arg + value;
}
function add(first, second = getValue(first)) {
    return first + second;
}

console.log(add(1, 1));
console.log(add(1));
