function loopsExample () {

    var func = [];

    //problem
    /*for (var x = 1; x <= 10; x++) {
        func.push(function () {
            console.log(x);
        });
    }*/

    //Solution - 1
    for (var x = 1; x <= 10; x++) {
        (function (x) {
            func.push(function () {
                console.log(x);
            });
        })(x);
    }

    //Solution - 2
    for (let x = 1; x <= 10; x++) {
        func.push(function () {
            console.log(x);
        });
    }

    func.forEach(function (fn) {
        fn();
    });
}

loopsExample();