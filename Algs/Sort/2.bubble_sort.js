const array = [20, 77, 11, -3, 70, 50, 5, 40, 38];
const array2 = [1, 9, 7, 3, 2, 0];
let count = 0;
const bubble_sort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // optimization flag:
    let flag = 0;
    count += 1;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        flag = 1;
      }
    }
    // check if array is sorted, then stop the loop!
    if (!flag) break;
  }
  return arr;
};
// in-place sorting algorithm
// time complexity: O(n*n) or (Onˆ2), memory complexity: O(1)
console.log(bubble_sort(array));
console.log(bubble_sort(array2));
console.log(count);
