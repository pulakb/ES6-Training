/*
* Closely related to the concept of an iterator is an iterable. An iterable is an object that has a default iterator
* specified using the @@iterator symbol. More specifically, @@iterator contains a function that returns an iterator
* for the given object. All of the collection objects, including arrays, sets, and maps, as well as strings,
* are iterables and so have a default iterator specified. Iterables are designed to be used with a new addition
* to ECMAScript: the for-of loop.

 The for-of loop is similar to the other loops in ECMAScript except that it is designed to work with iterables.
 The loop itself calls next() behind the scenes and exits when the done property of the returned object is true.
 For example:
*
* */

let values = [1, 2, 3];

for (let i of values) {
    console.log(i);
}

/*
* The for-of loop in this example is first calling the @@iterator method to retrieve an iterator, and then calling
* iterator.next() and assigning the variable i to the value returned on the value property. So i is first 1, then 2,
* and finally 3. When done is true, the loop exits, so i is never assigned the value of undefined.

* The for-of statement will throw an error when used on, a non-iterable, null, or undefined.
*
* */