// 1. Spread 연산자

let arr1 = [1, 2, 3];

let arr2 = [4, arr1[0], arr1[1], arr1[2], 5, 6];
let arr3 = [4, ...arr1, 5, 6];

console.log(arr2);
console.log(arr3);

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  a: obj1.a,
  b: obj1.b,
  c: 3,
  d: 4,
};

let obj3 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// Rest 매개변수
// Spread와 비슷하지만 배열로 저장
function funcB(one, ...rest) {
  console.log(one);
  console.log(rest);
}

funcB(...arr1);
