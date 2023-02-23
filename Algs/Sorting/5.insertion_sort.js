/**
 * Insertion Sort:
 * 1. Перебираємо елементи у невідсортованій
 * частині масиву
 * 2. Кожен елемент вставляється в
 * відсортовану частину масиву на те місце,
 * де він має бути.
 *
 * Даному алгоритму присутня природність в поведінці,
 * дана  властивість, забезпечує швидку обробку впорядкованих або
 * частково впорядкованих даних.
 * Це найкращий алгоритм для ворядкованих або частково впорядкованих масивів.
 */

const insertionSort = (arr) => {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let j;
    // moving element into first 'sorted' part, maintaining sorted order
    for (j = i; j > 0; j--) {
      if (arr[j - 1] > curr) {
        arr[j] = arr[j - 1];
      } else {
        break;
      }
    }
    arr[j] = curr;
  }
};

const insertionSort2 = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let index = i;
    //same as previos just two conditions are in one plce
    while (index > 0 && arr[index - 1] > value) {
      //copy the grater elements to the right making the place to insert the element in right position
      arr[index] = arr[index - 1];
      index--;
    }

    arr[index] = value;
  }
  return arr;
};

// Results:
const checkResults = () => {
  const arrays = [
    [8, 2, 1, 6, 3, 1, 8, -2, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  for (let arr of arrays) {
    let a = [...arr];
    insertionSort(a);
    console.log('insertionSort: ', a.toString());

    a = [...arr];
    insertionSort2(a);
    console.log('insertionSort2: ', a.toString());
  }
};
checkResults();
