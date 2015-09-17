function constExample (condition) {

    //var count = 30;

    // Syntax error
    //let count = 40;

    var count = 30;

    // Does not throw an error
    if (condition) {
        let count = 40;
        console.log(count);
    }

    console.log(count);
}

constExample(true);