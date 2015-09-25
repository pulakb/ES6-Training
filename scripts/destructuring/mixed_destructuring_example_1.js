var colors = [ "red", "green", "blue" ];

// later

var [ firstColor, secondColor ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"

var colors = [ "red", [ "green", "lightgreen" ], "blue" ];

// later

var [ firstColor, [ secondColor ] ] = colors;

console.log(firstColor);        // "red"
console.log(secondColor);       // "green"