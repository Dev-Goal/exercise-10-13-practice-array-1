let array = [];
let n;
while (true) {
  n = Number(prompt("Nhập độ dài length"));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (let i = 0; i < n; i++) {
  let input = Number(prompt(`Nhập phần tử thứ ${i + 1}`));
  array.push(input);
}

a = Number(prompt("Nhập phần tử muốn kiểm tra"));
if (array.includes(a) == true) {
  let filterArray = array.filter(function (element) {
    return element !== a;
  });
  let abcArray = filterArray.push(0);
  alert("Dãy số ban đầu là " + array + "|||||Dãy số lúc sau là " + filterArray);
} else {
  alert(a + " không nằm trong mảng");
}
