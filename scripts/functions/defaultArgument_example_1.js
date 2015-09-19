let value = 5;

function getValue () {
    return value++;
}
function add(first, second = getValue()) {
    return first + second;
}

/*
* In this example, value begins as 5 and is incremented each time getValue() is called.
* The first call to add(1) returns 6 while the second call to add(1) returns 7 because value
* was incremented. Because the default value is only evaluated when the function is called,
* changes to that value can be made at any time.
* */
console.log(add(1, 1));
console.log(add(1));
console.log(add(1));
