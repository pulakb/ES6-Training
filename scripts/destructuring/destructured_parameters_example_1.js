/*function setCookie (name , value, options) {
    console.log(name);
    console.log(value);
    console.log(options);
}*/

function setCookie (name , value, {secure, path, domain, expires} = {}) {
    console.log(name);
    console.log(value);
    console.log(secure);
    console.log(path);
    console.log(domain);
    console.log(expires);
}

setCookie('city', 'blr', {
    "secure": true,
    "expires": 5000
});

/*
* Destructuring makes it easier to work with objects and arrays in JavaScript. Using syntax that's
* already familiar to many developers, object literals and array literals, you can now pick data
* structures apart to get at just the information you're interested in.

 Destructured parameters use the destructuring syntax to make options objects more transparent when
 used as function parameters. The actual data you're interested in can be listed out along with
 other named parameters.
* */