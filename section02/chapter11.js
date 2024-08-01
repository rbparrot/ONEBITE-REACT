console.log(1);

setTimeout(() => {
  // 비동기
  // 3000 만큼 지난후에 콜백 함수 실행
  console.log(2);
}, 3000);

console.log(3);

// 자바스크립트는 싱글쓰레드
// Web APIs에서 별도 실행
