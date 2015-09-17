function loopsExample () {

    var func = [],
        obj = {
            a: "hero",
            b: "jero",
            c: "kero"
        };

    for (let x in obj) {
        func.push(function () {
            console.log(obj[x]);
        });
    }

    func.forEach(function (fn) {
        fn();
    });
}

loopsExample();