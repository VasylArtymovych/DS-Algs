const main = () => {
  const a = [5, 2, 1, -5, 3, -10, 1, 9, 4, 2, 1, 5, 6, 8];

  const a1 = a.slice();
  quickSort(a1);
  console.log('Quick sort recursive: ' + a1.toString());

  const a2 = a.slice();
  quickSortIterative(a2);
  console.log('Quick sort iterative: ' + a2.toString());
};

const quickSort = (arr, left, right) => {
  left = left ?? 0;
  right = right ?? arr.length - 1;
  if (left >= right) return;
  // divide array
  const p = partition(arr, left, right);
  // recursively work with left and right part of divided array
  quickSort(arr, left, p - 1);
  quickSort(arr, p + 1, right);
};

const quickSortIterative = (arr, left, right) => {
  left = left ?? 0;
  right = right ?? arr.length - 1;

  //auxiliary stack
  const intStack = new Array(right - left + 1);

  // top of stack initialized to -1
  let top = -1;

  // push initial values of left and right to stack
  intStack[++top] = left;
  intStack[++top] = right;

  // Keep popping from stack while is not empty
  while (top >= 0) {
    right = intStack[top--];
    left = intStack[top--];

    // Set pivot element at its correct position
    // in sorted array
    const pivot = partition(arr, left, right);

    // If there are elements on left side of pivot,
    // then push left side to stack
    if (pivot - 1 > left) {
      intStack[++top] = left;
      intStack[++top] = pivot - 1;
    }

    // If there are elements on right side of pivot,
    // then push right side to stack
    if (pivot + 1 < right) {
      intStack[++top] = pivot + 1;
      intStack[++top] = right;
    }
  }
};

/**
 * For simplicity, this function takes the last element as the pivot.
 * Then, checks each element and swaps it before the pivot if its value is smaller.
 *
 * By the end of the partitioning, all elements less than the pivot are on the left of it
 * and all elements greater than the pivot are on the right of it.
 * The pivot is at its final sorted position and the function returns this position
 */
const partition = (arr, left, right) => {
  const pivot = arr[right];
  let j = left;
  for (let i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, right, j);

  return j;
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

main();
