// 거짓
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 참
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 활용 사례

function printName(person) {
  if (!person) {
    console.log("값이 없음");
    return;
  }
  console.log(person.name);
}

let person;
printName(person);
