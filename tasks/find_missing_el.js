/**
 * Дано масив цілих чисел arr, відсортований за зростанням
 * Масив розміром N, для кожного елемента якого виконується 1 <= arr[i] <= N
 *
 * Один елемент видалили з масиву -- знайдіть відсутній елемент.
 *
 * Приклад:
 * input: arr = [1, 2, 3, 4, 5, 7]
 * output: 6
 */

// Time: O(n); Space: O(1);
const findMissingEl = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
};

// Optimized:
// Time : O(log(n));  Space: O(1)
const findMissingElOpt = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  // for us, the main point is that arr[i] == i + 1
  // thus we can easily go with slightly modified binary search
  while (left <= right) {
    let mid = Math.trunc(left + (right - left) / 2);

    if (arr[mid] === mid + 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left + 1;
};
