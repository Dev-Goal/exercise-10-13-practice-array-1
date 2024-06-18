let number1 = Number(prompt("Nhập phần tử 1 "));
let number2 = Number(prompt("Nhập phần tử 2 "));
let number3 = Number(prompt("Nhập phần tử 3 "));
let number4 = Number(prompt("Nhập phần tử 4 "));
let number5 = Number(prompt("Nhập phần tử 5 "));
let array = [number1, number2, number3, number4, number5];
let max = array[0];
let ava = (number1+number2+number3+number4+number5)/5;
for (i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
alert("Số lớn nhất trong mảng là " + max + " và trung bình của các số là " + ava);

