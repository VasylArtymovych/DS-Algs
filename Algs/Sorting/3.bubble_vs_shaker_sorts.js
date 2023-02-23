const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
/**
 * Алгоритм який полягає в порівнянні елементві і переміщенні елемента з
 * найбільшим ключем в кінець і так поки масив стане відсортованим.
 * Використовують ще мітку (swaped) для того щоб на останніх ітераціях пропустити
 * порівняння якщо масив вже є повністю відсортований.
 */
// time complexity: (Onˆ2), memory complexity: O(1)
const bubbleSort = (arr) => {
  let n = arr.length;
  let swapped = false;

  for (let i = 0; i < n; i++) {
    // optimization flag: if nothing to swap just break this iteration.
    swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) break;
  }
};

const bubbleSortRecursive = (arr, n) => {
  if (n === 1) return;

  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  // Largest element is fixed,
  // recur for remaining array
  bubbleSortRecursive(arr, n - 1);
};
/**
 * Оптимізація яка називається SHAKER_SORT
 * Алгоритм який полягає в порівнянні елементві і переміщенні елемента з
 * найбільшим ключем в кінець і потім в зворотньому порядку найменшого на поаток.
 * Проте асимптотика не змінюється і залишається такою ж як у babble sort.
 * Але реальний час роботи кращий.
 * Використовують ще мітку (swaped) для того щоб на останніх ітераціях пропустити
 * порівняння якщо масив вже є повністю відсортований.
 */
// time complexity: (Onˆ2), memory complexity: O(1)
const shakerSort = (arr) => {
  let left = 0;
  let right = arr.length;

  let swapped = true;
  while (swapped) {
    // 'bubble up' largest element to the end
    swapped = false;
    for (let i = left; i < right - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    // fix the last element
    right--;

    // 'bubble down' smallest element to the beginning (moving from right to left)
    swapped = false;
    for (let i = right - 1; i >= left; i--) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    // fix the first element
    left++;
  }
};

// Results:
const checkResults = () => {
  const arrays = [
    [8, 2, 1, 6, 3, 1, 8, -2, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  for (let arr of arrays) {
    let a = [...arr];
    bubbleSort(a);
    console.log('Bubble sort: ', a.toString());

    a = [...arr];
    bubbleSortRecursive(a, a.length);
    console.log('Bubble sort Recursive: ', a.toString());

    a = [...arr];
    shakerSort(a);
    console.log('shakerSort: ', a.toString());
  }
};
checkResults();
