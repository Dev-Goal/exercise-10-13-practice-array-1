let firstArray = [];
let secondArray = [];
let n;

while (true) {
  n = Number(prompt("Nhập vào số lượng mảng"));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (let i = 0; i < n; i++) {
  let input = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
  firstArray.push(input);
  secondArray.push(input);
}

// for (let i = 0; i < n - 1; i++) {
//   for (let j = i + 1; j < n; j++) {
//     if (array[i] > array[j]) {
//       let min = array[i];
//       array[i] = array[j];
//       array[i] = min;
//     }

//   }
// }
// // alert(array);
// console.log(array);

for (let a = 0; a < n; a++) {
  for (let b = n - 1; b > a; b--) {
    if (secondArray[a] < secondArray[b]) {
      var temp = secondArray[b];
      secondArray[b] = secondArray[a];
      secondArray[a] = temp;
    }
  }
}
alert(`Mảng bạn nhập là ${firstArray}`);
alert(`Đã được sắp xếp là ${secondArray}`);
