// 1. 객체 생성
let obj1 = new Object();
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
  extra: {},
  10: 20,
  "like cat": true,
  //Key : value
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)

// 점 표기법
let name = person.name;
console.log(name);

// 괄호 표기법
let age = person["age"];
console.log(age);

let property = "hobby"; // 동적일 때
let hobby = person[property];
console.log(hobby);

// 4. 새로운 프로퍼티를 추가하는 방법
person.job = "FE developer";
person["favoriteFood"] = "떡볶이";

// 5. 프로퍼티 삭제
delete person.job;
delete person["favoriteFood"];

console.log(person);

// 6. in 연산자
let result1 = "name" in person;
console.log(result1);
