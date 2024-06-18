let array = [0, 1, 2, 3, 20, 4, 5, 6, 7, 8, 9, 10];
let max = array[0];
let index;
for (i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
    index = i;
  }
}
document.write("Số lớn nhất trong dãy là " + max + " và ở vị trí " + index);
