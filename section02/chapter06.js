// 1. 배열 순회

// 1.1 배열 인덱스
let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1.2 for of 반복문

for (let item of arr) {
  console.log(item);
}

// 2. 객체 순회

let person = {
  name: "이정환",
  age: 27,
  hobby: "테니스",
};

// Object.Keys 사용
let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], person[keys[i]]);
}

for (let key of keys) {
  console.log(key, person[key]);
}

// Object.values 사용
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}

// for in
for (let key in person) {
  const value = person[key];
  console.log(key, value);
}
