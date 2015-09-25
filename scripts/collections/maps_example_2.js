/*
* When you want to work with all of the data in the map, you have several options.
* There are actually three generator methods to choose from: keys, which iterates
* over the keys in the map, values, which iterates over the values in the map, and
* entries, which iterates over key-value pairs by returning an array containing the
* key and the value (entries is the default iterator for maps). The easiest way to
* make use of these is to use a for-of loop
* */

var map = new Map([ ["name", "Jon"], ["title", "mr"]]);

for (let key of map.keys()) {
    console.log("Key: %s", key);
}

for (let value of map.values()) {
    console.log("Value: %s", value);
}

for (let item of map.entries()) {
    console.log("Key: %s, Value: %s", item[0], item[1]);
}

for (let item of map) {
    console.log("Key: %s, Value: %s", item[0], item[1]);
}

/*
* When iterating over keys or values, you receive a single value each time through the loop.
* When iterating over entries, you receive an array whose first item is the key and the second
* item is the value.
* */

/*
* Another way to iterate over items is to use the forEach() method. This method works in a
* similar manner to forEach() on arrays. You pass in a function that gets called with three
* arguments: the value, the key, and the map itself.
* */

map.forEach(function ( value, key, map) {
    console.log("Key: %s, Value: %s", key, value);
});

/*
* Also similar to the array's version of forEach(), you can pass in an optional second argument to
* specify the this value to use inside the callback
* */

var reporter = {
  report: function (key, value) {
      console.log("Key: %s, Value: %s", key, value);
  }
};

map.forEach(function (value, key, map) {
    this.report(key, value);
}, reporter);

/*
* Here, the this value inside of the callback function is equal to reporter.
 * That allows this.report() to work correctly.
* */

