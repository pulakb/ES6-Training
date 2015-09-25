/*
*
* A set is in an ordered list of values that cannot contain duplicates. You typically don't access items in the set
* like you would items in an array; instead, it's much more common to check the set to see if a value is present.
*
* ECMAScript 6 introduces the Set type as a set implementation for JavaScript. You can add values to a set
* by using the add() method and see how many items are in the set using size:
* */

var items = new Set();
items.add(5);
items.add("5");

console.log(items.size);

/*
* ECMAScript 6 sets do not coerce values in determining whether or not two values are the same.
* So, a seA set is in an ordered list of values that cannot contain duplicates. You typically don't access items in the set like you would items in an array; instead, it's much more common to check the set to see if a value is present.t can contain both the number 5 and the string "5" (internally, the comparison is done
* using Object.is()). If the add() method is called more than once with the same value, all calls
* after the first one are effectively ignored:
* */

var items = new Set();
items.add(5);
items.add("5");
items.add(5); // will be ignored

console.log(items.size);

/*
* You can initialize the set using an array, and the Set constructor will ensure that only unique values are used:
* */

var items = new Set([1,2,3,4,5,5,5,5]);
console.log(items.size);

/*
* You can test to see which items are in the set using the has() method:
* */
console.log(items.has(1));
console.log(items.has(7));

// you can remove an item from the set by using the delete() method
items.delete(1);

console.log(items.has(1));

/*
* it is still possible to iterate over all of the set's values by using the new ECMAScript 6 for-of statement.
* The for-of statement is a loop that iterates over values of a collection, including arrays and array-like structures.
* */

for (let num of items) {
    console.log(num);
}