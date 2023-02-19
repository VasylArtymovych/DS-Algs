const array = [10, 25, 3, 50, 20];
const array2 = [2, -3, 4, 44, 32, -67, 5, 6, 7, 77, 45, 99, 12, -5, 71];

//todo quick sort implementation using recursive deviding an array:
let count = 0; // count number of iterations.

const quick_sort = (arr) => {
  if (arr.length < 2) return arr;

  let pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const greater = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else if (arr[i] > pivot) {
      greater.push(arr[i]);
    }
    count += 1;
  }

  return quick_sort(less).concat(pivot, quick_sort(greater));
};
// results:
// console.log(quick_sort(array), 'itrn', count);
// console.log(quick_sort(array2), 'itrn', count);

// todo quick sort implementation by finding the sorted pivot element in array, recursivly:
// find sorted position for pivot element:
const partition = (arr, start, end) => {
  var pIndex = start;
  var pivot = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pIndex]] = [arr[pIndex], arr[i]];
      pIndex++;
    }
  }

  [arr[end], arr[pIndex]] = [arr[pIndex], arr[end]];
  return pIndex;
};

const quickSort = (arr, start, end) => {
  if (start < end) {
    let pIndex = partition(arr, start, end);
    quickSort(arr, start, pIndex - 1);
    quickSort(arr, pIndex + 1, end);
  }

  return arr;
};

console.log(quickSort(array, 0, array.length - 1));
console.log(quickSort(array2, 0, array2.length - 1));
