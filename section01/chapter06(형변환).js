// 1. 묵시적 형 변환

let num = 10;
let str = "20";

const result = num + str; // (문자열로 변환) 10 + 20 = 1020
console.log(result);

// Number()
let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1 + 20);

// parseInt()
let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2 + 30);

// String()
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
