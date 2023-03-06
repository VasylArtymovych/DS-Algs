// You are given two sorted arrays that both only contain integers.
// Merge them into a single one, sorted in asc order.
//* Note: arr1 and arr2 may be sorted in different orders.
//* Note: Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

const { merge } = require('lodash');

//todo: Option 1:
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

//todo: Option 2:
function mergeArrays2(arr1, arr2) {
  return arr1
    .filter((el) => !arr2.includes(el))
    .concat(arr2)
    .sort((a, b) => a - b);
}

//todo: Option 3:
function mergeArrays3(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;

  // Reverse if array sorted in descending order
  if (arr1[0] > arr1[n - 1]) {
    arr1.reverse();
  }
  if (arr2[0] > arr2[m - 1]) {
    arr2.reverse();
  }
  // Create
  const merged = [];

  let i = 0;
  let j = 0;
  let k = 0;
  // compare values and add smalest to the merged array
  while (i < n && j < m) {
    let val;
    if (arr1[i] === arr2[j]) {
      val = arr1[i];
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      val = arr1[i];
      i++;
    } else {
      val = arr2[j];
      j++;
    }

    merged[k] = val;
    k++;
  }
  //add reamaining values in arr1, to the merged array
  while (i < n) {
    merged[k++] = arr1[i++];
  }
  //add reamaining values in arr2, to the merged array
  while (j < m) {
    merged[k++] = arr2[j++];
  }

  return merged;
}

//todo: Option 4:
function mergeArrays4(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];

  if (arr1[0] > arr1[arr1.length - 1]) {
    arr1.reverse();
  }
  if (arr2[0] > arr2[arr2.length - 1]) {
    arr2.reverse();
  }

  while (i < arr1.length || j < arr2.length) {
    let a = arr1[i];
    let b = arr2[j];

    if (a === undefined) {
      result.push(b);
      j += 1;
    }
    if (b === undefined) {
      result.push[a];
      i += 1;
    }
    if (a === b) {
      result.push(a);
      i += 1;
      j += 1;
    }

    if (a < b) {
      result.push(a);
      i += 1;
    }
    if (a > b) {
      result.push(b);
      j += 1;
    }
  }
  return result;
}

// console.log(mergeArrays([], [1, 2, 3])); //? [1,2,3]
// console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //? [1,2,3,4,5,6,7,8,9,10]
// console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //? [1,2,3,4,5,7,9,10,11,12]
// console.log(mergeArrays([], [])); //? []

// console.log(mergeArrays2([], [1, 2, 3])); //? [1,2,3]
// console.log(mergeArrays2([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //? [1,2,3,4,5,6,7,8,9,10]
// console.log(mergeArrays2([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //? [1,2,3,4,5,7,9,10,11,12]
// console.log(mergeArrays2([], [])); //? []

// console.log(mergeArrays3([], [1, 2, 3])); //? [1,2,3]
// console.log(mergeArrays3([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //? [1,2,3,4,5,6,7,8,9,10]
// console.log(mergeArrays3([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //? [1,2,3,4,5,7,9,10,11,12]
// console.log(mergeArrays3([], [])); //? []

// console.log(mergeArrays4([], [1, 2, 3])); //? [1,2,3]
// console.log(mergeArrays4([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //? [1,2,3,4,5,6,7,8,9,10]
// console.log(mergeArrays4([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //? [1,2,3,4,5,7,9,10,11,12]
// console.log(mergeArrays4([], [])); //? []
