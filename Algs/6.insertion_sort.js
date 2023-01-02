const array = [20, 77, 11, -3, 70, 50, 5, 40, 38];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let index = i;

    while (index > 0 && arr[index - 1] > value) {
      arr[index] = arr[index - 1];
      index--;
    }

    arr[index] = value;
  }
  return arr;
};

console.log(insertionSort(array));
