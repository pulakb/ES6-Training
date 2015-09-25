var options = {
    repeat: true,
    save: false,
    colors: [ "red", "green", "blue" ]
};

var { repeat, save, colors: [ firstColor, secondColor ]} = options;

console.log(repeat);            // true
console.log(save);              // false
console.log(firstColor);        // "red"
console.log(secondColor);       // "green"


var { repeat, save, colors } = options;

console.log(repeat);                        // true
console.log(save);                          // false
console.log(colors);                        // "red,green,blue"
console.log(colors === options.colors);     // true

/*
* This modified example retrieves options.colors and stores it in the colors variable.
* Notice that colors is a direct reference to options.colors and not a copy.

 Mixed destructuring is very useful for pulling values out of JSON configuration structures
 without navigating the entire structure.
* */