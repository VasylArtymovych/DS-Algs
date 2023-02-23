/**
 * Selection sort:
 * 1. У невідсортованому підмасиві шукається
 * локальний максимум (мінімум).
 * 2. Знайдений максимум (мінімум) змінюється
 * місцями з останнім (першим) елементом у
 * підмасиві.
 * 3. Якщо в масиві залишилися невідсортовані
 * підмасиви дивись пункт 1.
 */

// Local minimum:
const selectionSortMin = (arr) => {
  const n = arr.length;
  let pos;
  for (let i = 0; i < n; i++) {
    pos = i;
    // find the smallest element from the rest
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[pos]) pos = j;
    }
    // swap smallest from rest to the beginning
    swap(arr, i, pos);
  }
};

// Local maximum:
const selectionSortMax = (arr) => {
  let n = arr.length;
  let pos; // position of min element
  for (let i = n - 1; i > 0; i--) {
    pos = i;
    // find the smallest element from the rest
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[pos]) {
        pos = j;
      }
    }
    // swap smallest from rest to the beginning
    swap(arr, i, pos);
  }
};

/**
 * Double Selection sort:
 * 1. У невідсортованому підмасиві шукається
 * локальний максимум і мінімум.
 * 2. Знайдений максимум і мінімум  змінюється
 * місцями з останнім і першим елементом у
 * підмасиві.
 * 3. Якщо в масиві залишилися невідсортовані
 * підмасиви дивись пункт 1.
 */

const doubleSelectionSort = (arr) => {
  let n = arr.length;
  let pos; // position of min element
  for (let i = n - 1; i > 0; i--) {
    pos = i;
    // find the smallest element from the rest
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[pos]) {
        pos = j;
      }
    }
    // swap smallest from rest to the beginning
    swap(arr, i, pos);
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Results:
const checkResults = () => {
  const arrays = [
    [8, 2, 1, 6, 3, 1, 8, -2, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  for (let arr of arrays) {
    let a = [...arr];
    selectionSortMin(a);
    console.log('selectionSortMin: ', a.toString());

    a = [...arr];
    selectionSortMax(a);
    console.log('selectionSortMax: ', a.toString());
  }
};
checkResults();
