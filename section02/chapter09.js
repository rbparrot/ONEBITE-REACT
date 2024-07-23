// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "나형율", hobby: "게임" },
  { name: "김미정", hobby: "테니스" },
];

const tennisPeople = arr1.filter((item) => item.hobby === "테니스");

console.log(tennisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1);

let names = arr1.map((item) => item.name); // arr1의 이름만으로 이루어진 배열

// 3. sort
// 배열을 사전순으로 정렬하는 메서드

let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); // ['a','b','c']

// 숫자 대수 비교 !!
let arr4 = [10, 3, 5];
arr4.sort();

console.log(arr4); // [10, 3, 5]

arr4.sort((a, b) => {
  // 오름차순 정렬
  if (a > b) {
    return 1; // b, a 배치
  } else if (a < b) {
    // a, b 배치
    return -1;
  } else {
    return 0; // a,b 자리를 그대로 유지
  }
});

console.log(arr4); // [3, 5, 10]

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 그런 메서드

let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join("-");

console.log(joined); // "hi-im-winterlood"
