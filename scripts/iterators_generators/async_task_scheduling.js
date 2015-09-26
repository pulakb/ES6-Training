/*
 var fs = require("fs");

 function readConfigFile(callback) {
    fs.readFile("config.json", callback);
 }

 function init(callback) {
     readConfigFile(function(err, contents) {
         if (err) {
            throw err;
         }

        doSomethingWith(contents);
        console.log("Done");
     });
 }

 init();
* */

var fs = require("fs");

var task;

function readConfigFile() {
    fs.readFile("config.json", function (err, contents) {
        if (err) {
            task.throw(err);
        } else {
            task.next(contents);
        }
    });
}

function doSomethingWith(contents) {
    console.log(contents.toString());
}

function *init() {
    var contents = yield readConfigFile();
    doSomethingWith(contents);
    console.log("Done");
}

task = init();
task.next();

/*
* The difference between init() in this example and the previous one is why developers are excited about generators
 * for asynchronous operation. Instead of using callbacks, init() yields to readConfigFile(), which does the asynchronous
 * read operation and, when complete, either calls throw() if there's an error or next() if the contents have been ready.
 * That means the yield operation inside of init() will throw an error if there's a read error or else the file contents
 * will be returned almost as if the operation was synchronous.
*
* */