let firstArray = [];
let a;
while (true) {
  a = Number(prompt("Nhập vào số lượng phần tử của mảng 1"));
  if (Number.isInteger(a) && a > 0) {
    break;
  }
}
for (let i = 0; i < a; i++) {
  let input = Number(prompt(`Nhập vào phần tử thứ ${i + 1} của mảng 1`));
  firstArray.push(input);
}
alert("Mảng 1 là " + firstArray);

let secondArray = [];
let b;
while (true) {
  b = Number(prompt("Nhập vào số lượng phần tử của mảng 2"));
  if (Number.isInteger(a) && a > 0) {
    break;
  }
}
for (let i = 0; i < b; i++) {
  let input = Number(prompt(`Nhập vào phần tử thứ ${i + 1} của mảng 2`));
  secondArray.push(input);
}
alert("Mảng 2 là " + secondArray);

let thirdArray = [];
thirdArray.push(firstArray);
thirdArray.push(secondArray);
alert("Mảng 3 sau khi nối là " + thirdArray);
