let num = 4;

if (num >= 10) {
  console.log("num은 10 이상입니다");
  console.log("조건은 참입니다!");
} else if (num >= 5) {
  console.log("num은 5 이상입니다");
} else {
  console.log("조건이 거짓입니다!");
}

// 2. Switch 문
let animal = "dog";

switch (animal) {
  case "cat": {
    console.log("고양이");
    break;
  }
  case "dog": {
    console.log("개");
    break;
  }
  case "snake": {
    console.log("뱀");
    break;
  }
  default: {
    console.log("그런 동물은 잘 모릅니다");
  }
}
