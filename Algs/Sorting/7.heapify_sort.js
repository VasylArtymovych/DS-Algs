const array = [50, 30, 40, 10, 20, 80, 60];
const array2 = [80, 30, 60, 10, 20, 40, 50];
// build heap of array:
const buildHeap = (arr, size) => {
  for (let i = Math.floor(size / 2); i >= 0; i--) {
    heapify(arr, i, size - 1);
  }

  return arr;
};

// swap elements in the array:
const swap = (arr, max, index) => {
  [arr[max], arr[index]] = [arr[index], arr[max]];
};

// count node's children from the last node and check which one has the max value,
// and makes it the parent node, and after swap, checking the swaped node of max value with new cledren:
const heapify = (arr, index, last) => {
  const leftChildNode = 2 * index + 1;
  const rightChildNode = 2 * index + 2;

  let max = index;

  if (leftChildNode <= last && arr[leftChildNode] > arr[max]) {
    max = leftChildNode;
  }

  if (rightChildNode <= last && arr[rightChildNode] > arr[max]) {
    max = rightChildNode;
  }

  if (max !== index) {
    swap(arr, max, index);
    heapify(arr, max, last);
  }
};
// console.log(buildHeap(array, array.length));
// console.log(buildHeap(array2, array2.length));

// todo heapify sort implementation:
const heapSort = (arr, size) => {
  buildHeap(arr, size);

  let last = size - 1;

  while (last > 0) {
    swap(arr, 0, last);
    last--;
    heapify(arr, 0, last);
  }

  return arr;
};

console.log(heapSort(array, array.length));
