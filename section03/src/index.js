// import mul from "./math.js";
// import { add, sub } from "./math.js";
import mul, { add, sub } from "./math.js";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));

//ESM 모듈 시스템

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
