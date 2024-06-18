let string = prompt("Nhập vào 1 chuỗi");
array = string.toLowerCase();
let vowels = ["u", "e", "o", "a", "i"];
let count = 0;
for (let char of string) {
  if (vowels.includes(char)) {
    count++;
  }
}
alert("Số nguyên âm trong dãy là " + count);
