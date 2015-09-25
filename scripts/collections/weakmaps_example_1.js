/*
* Uses and Limitations

 Weakmaps have a very specific use case in mind, and that is mapping values to objects that might disappear in the future.
 The ability to free up memory related to these objects is useful for JavaScript libraries that wrap DOM elements with
 custom objects such as jQuery and YUI. There'll likely be more use cases discovered once implementations are complete
 and widespread, but in the short term, don't feel bad if you can't figure out a good spot for using weakmaps.

 In many cases, a regular map is probably what you want to use. Weakmaps are limited in that they aren't enumerable
 and you can't keep track of how many items are contained within. There also isn't a way to retrieve a list of all keys.
 If you need this type of functionality, then you'll need to use a regular map. If you don't, and you only intend to use
 objects as keys, then a weakmap may be the right choice.
* */