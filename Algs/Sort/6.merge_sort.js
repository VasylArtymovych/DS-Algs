const array = [10, 25, 3, 50, 20];
const array2 = [2, -3, 4, 44, 32, -67, 5, 6, 7, 77, 45, 99, 12, -5, 71];

const merge = (arr, start, mid, end) => {
  var temp = [];
  var i, j, k;
  i = start;
  j = mid + 1;
  k = 0;

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k] = arr[i];
      i++;
      k++;
    } else {
      temp[k] = arr[j];
      j++;
      k++;
    }
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j <= end) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  k = 0;
  for (i = start; i <= end; i++) {
    arr[i] = temp[k++];
  }
};

const mergeSort = (arr, start, end) => {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
  return arr;
};

console.log('1opt', mergeSort(array, 0, array.length - 1));
console.log('2opt', mergeSort(array2, 0, array2.length - 1));
