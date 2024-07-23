// 단락 평가

function returnFalse() {
  console.log("False 함수");
  return false;
}

function returnTrue() {
  console.log("True 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
// : False 함수
// : false

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
