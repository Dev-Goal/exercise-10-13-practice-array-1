let number1 = Number(prompt("Nhập phần tử 1"));
let number2 = Number(prompt("Nhập phần tử 2"));
let number3 = Number(prompt("Nhập phần tử 3"));
let number4 = Number(prompt("Nhập phần tử 4"));
let number5 = Number(prompt("Nhập phần tử 5"));
let number6 = Number(prompt("Nhập phần tử 6"));
let number7 = Number(prompt("Nhập phần tử 7"));
let array = [number1, number2, number3, number4, number5, number6, number7];
let array1 = [number1, number2, number3, number4, number5, number6, number7];
let firstNumber = 0;
let lastNumber = array.length - 1;
while (firstNumber < lastNumber) {
  let i = array[firstNumber];
  array[firstNumber] = array[lastNumber];
  array[lastNumber] = i;
  firstNumber++;
  lastNumber--;
//   array1 = array;
}
alert("Dãy số là " + array1 + "-------Dãy số đảo ngược là " + array);
