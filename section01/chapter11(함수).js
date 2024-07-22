// 함수 선언

function greeting() {
  console.log("안녕하세요!");
}

console.log("호출 전");
greeting();
console.log("호출 후");

let res = getArea(10, 20);
console.log(res);

// 호이스팅 ->> 끌어 올리다
function getArea(width, height) {
  let area = width * height;

  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  return area;
}
