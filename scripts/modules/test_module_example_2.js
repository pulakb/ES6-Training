import sum, {color} from "./module_example_2.js";
import "./module_example_3.js";

console.log(sum(1,2));
console.log(color);

let colors = ["red", "green", "blue"];
let items = [];

items.pushAll(colors);

for (let key in items) {
  console.log(key);
}

/*
* Note that there are no curly braces used in this case, as would be with a non-default export.
* In this example, the module is imported and executed, so pushAll() is added to the array prototype.
* That means pushAll() is now available for use on all arrays inside of this module.
* */