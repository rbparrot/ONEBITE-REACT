// 1. 배열 생성
let arrA = new Array();
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, []];
console.log(arrC);

let item1 = arrC[6];
let item2 = arrC[4];

console.log(item1);
console.log(item2);

arrC[0] = "hello";
