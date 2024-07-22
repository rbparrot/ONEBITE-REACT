// 1. 함수 표현식

function funcA() {}

let varA = funcA;
varA();

let varB = function () {
  // 익명함수
};

// 호이스팅이 안됨

// 2. 화살표 함수
let varC = (value) => {
  return value + 1;
};

let varD = (value) => value + 1;

console.log(varD(10));
console.log(varC(20));
