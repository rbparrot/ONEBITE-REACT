function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    // resolve : 성공상태로 변경
    // reject : 실패상태로 변경

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

// // then 그후에 (성공한 경우)
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   //promise chaining

// const p = add10(0);
// p.then((result) => {
//   console.log(result);
//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
