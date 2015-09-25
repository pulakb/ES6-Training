let options = {
    repeat: true,
    save: false,
    rules: {
        custom: 10
    }
};

// form - 1
var { repeat: localRepeat, save: localSave } = options;

// form -2
var { repeat, save } = options;

// form - 3
var { repeat, save, rules: {custom} } = options;
/*
* In this example, the custom property is embedded in another object. The extra set of curly braces
* allows you to descend into a nested object and pull out its properties.
* */

console.log(localRepeat);
console.log(localSave);

console.log(repeat);
console.log(save);

console.log(custom);