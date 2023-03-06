const arr = [10, 20, 40, 30, 80, 60, 50];
console.log('before', arr);

const buildHeap = (arr, size) => {
  var i = Math.floor(size / 2);
  for (i; i >= 0; i--) {
    heapify(arr, i, size);
  }
};

const heapify = (arr, index, size) => {
  const left = 2 * index + 1; // 2*index + 1
  const right = left + 1; // or 2*index + 2

  let max = index;

  if (left <= size && arr[left] > arr[max]) {
    max = left;
  }

  if (right <= size && arr[right] > arr[max]) {
    max = right;
  }

  if (index !== max) {
    [arr[max], arr[index]] = [arr[index], arr[max]];
    heapify(arr, max, size);
  }
};

const deleteMax = (arr, size) => {
  [arr[0], arr[size]] = [arr[size], arr[0]];

  // document.write('Max => ' + arr[size] + '<br>');
  arr.pop();
  heapify(arr, 0, arr.length - 1);
};

buildHeap(arr, arr.length - 1);
deleteMax(arr, arr.length - 1);
console.log('after', arr);
