let value = 5;

function getValue () {
    return value++;
}
function add(first, second = first) {
    return first + second;
}

console.log(add(1, 1));
console.log(add(1));
