function constExample () {

   /* if (condition) {
        console.log(typeof value);     // ReferenceError! at run time
        let value = "blue";
    }*/

    console.log(typeof value);     // "undefined"

    if (condition) {
        let value = "blue";
    }

    console.log(typeof value);     // "undefined"
}

constExample();