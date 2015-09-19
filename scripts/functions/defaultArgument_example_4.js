let value = 5;

function add(first = second, second) {
    return first + second;
}

console.log(add(1, 1));
/*
* The ability to reference parameters from default parameter assignments works only for previous arguments,
* so early arguments do not have access to later arguments.
* */
console.log(add(1));
