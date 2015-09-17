function constExample () {

    var message = "Hello!";
    let age = 25;

    // Each of these would throw an error given the previous declarations
    //const message = "Goodbye!";
    //const age = 30;

    //const maxItems = 5;
    //maxItems = 6;      // throws error

    /*const person = {
        name: "Nicholas"
    };*/

    // works
    //person.name = "Greg";

    // throws an error
    /*person = {
        name: "Greg"
    };*/


}

constExample();