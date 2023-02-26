const main = () => {
  const a = [5, 2, 1, -5, 3, -10, 1, 9, 4, 2, 1, 5, 6, 8];

  const a1 = a.slice();
  mergeSort(a1);
  console.log('Merge sort recursive: ' + a1.toString());

  const a2 = a.slice();
  mergeSortIterative(a2);
  console.log('Merge sort iterative: ' + a2.toString());
};

/**
 *
 * @param {Array} a
 * @param {Array} b
 * @returns {Array} merged array
 */

const mergeSimple = (a, b) => {
  const n = a.length;
  const m = b.length;

  const merged = new Array(n + m);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < n && j < m) {
    let v = a[i] <= b[j] ? a[i++] : b[j++];
    merged[k++] = v;
  }

  while (i < n) {
    merged[k++] = a[i++];
  }
  while (j < m) {
    merged[k++] = b[j++];
  }
  return merged;
};

const merge = (arr, low, mid, high) => {
  // Creating temporary subarrays
  const leftArray = new Array(mid - low + 1);
  const rightArray = new Array(high - mid);

  // Copying our subarrays into temporaries
  for (let i = low, j = 0; j < leftArray.length; i++, j++) {
    leftArray[j] = arr[i];
  }
  for (let i = mid + 1, j = 0; j < rightArray.length; i++, j++) {
    rightArray[j] = arr[i];
  }

  // Iterators containing current index of temp subarrays
  let leftIndex = 0;
  let rightIndex = 0;

  // Copying from leftArray and rightArray back into array
  for (let i = low; i < high + 1; i++) {
    // If there are still uncopied elements in R and L, copy minimum of the two
    if (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] < rightArray[rightIndex]) {
        arr[i] = leftArray[leftIndex];
        leftIndex++;
      } else {
        arr[i] = rightArray[rightIndex];
        rightIndex++;
      }
    } else if (leftIndex < leftArray.length) {
      // If all elements have been copied from rightArray, copy rest of leftArray
      arr[i] = leftArray[leftIndex];
      leftIndex++;
    } else if (rightIndex < rightArray.length) {
      // If all elements have been copied from leftArray, copy rest of rightArray
      arr[i] = rightArray[rightIndex];
      rightIndex++;
    }
  }
};

const mergeSort = (arr, low, high) => {
  low = low ?? 0;
  high = high ?? arr.length - 1;
  if (high <= low) return;

  let mid = Math.floor((low + high) / 2);
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
};

const mergeSortIterative = (arr) => {
  let low = 0;
  let high = arr.length - 1;

  // divide the array into blocks of size `m`
  // m = [1, 2, 4, 8, 16…]
  for (let m = 1; m <= high - low; m = 2 * m) {
    // for m = 1, i = 0, 2, 4, 6, 8 …
    // for m = 2, i = 0, 4, 8, 12 …
    // for m = 4, i = 0, 8, 16 …
    // …
    for (let i = low; i < high; i += 2 * m) {
      merge(arr, i, i + m - 1, Math.min(i + 2 * m - 1, high));
    }
  }
};

main();
