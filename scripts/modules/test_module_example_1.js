import { Rectangle } from "./module_example_1.js";
import { sum, multiply } from "./module_example_1.js";

import { bhag } from "./module_example_1.js";

let area = new Rectangle(10, 7).getArea();
console.log(area);

console.log(sum(10, 9));
console.log(multiply(10, 9));

console.log (bhag(10, 2));

/*
* Keep in mind that the code inside of a module will only ever be executed once, regardless of the number
* of times it's used in an import statement. Consider the following:

 import { sum } from "example";
 import { multiply } from "example";
 import { magicNumber } from "example";
 Even though there are three import statements in this module, the code in "example" will only be executed once.
 The instantiated module is then kept in memory and reused whenever another import statement references it.
 It doesn't matter if the import statements are all in the module, or are spread across multiple
 modules - they each will use the same module instance.
*
* */