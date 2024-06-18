let array = [];
let n;

while (true) {
  n = Number(prompt("Nhập vào số lượng mảng"));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (let i = 0; i < n; i++) {
  let input = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
  array.push(input);
}

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if (array[i] > array[j]) {
      let min = array[i];
      array[i] = array[j];
      array[i] = min;
    }

  }
}
// alert(array);
console.log(array);