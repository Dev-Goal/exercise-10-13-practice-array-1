let array = [];
let n;
while (true) {
  n = Number(
    prompt("Nhập vào số lượng của mảng. Lưu ý: n là 1 số nguyên dương > 0")
  );
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (let i = 0; i < n; i++) {
  let input = Number(prompt(`Mời nhập vào phần tử thứ ${i + 1}`));
  array.push(input);
}
alert(array);

let a = Number(prompt("Nhập số muốn kiểm tra"));
if (array.includes(a) == true) {
  alert("V is in the array");
} else {
  alert("V is not in the array");
}
