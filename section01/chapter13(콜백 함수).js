function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub);

function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, function (idx) {
  console.log(idx * 2);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});

// 함수 aliasing
