//  1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// 프로퍼티의 추가 삭제 수정 연산은 무관
// animal = 123 불가능

// 2. 메서드

const person = {
  name: "이정환",

  sayHi: () => {
    console.log("안녕!");
  },

  sayHi2() {
    // 메서드 선언
    console.log("안녕2 !");
  },
};

person.sayHi();
person.sayHi2();
