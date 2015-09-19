/*
* The arguments object works together with rest parameters by reflecting the arguments that
* were passed to the function when called.
* */
function checkArgs(...args) {
    console.log(args.length);
    console.log(arguments.length);
    console.log(args[0], arguments[0]);
    console.log(args[1], arguments[1]);
}

checkArgs("a", "b");