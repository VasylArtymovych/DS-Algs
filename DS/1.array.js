// insert an element in array on given position:
const array = [1, 20, 5, 78, 30];

function insertElInArrOnPos(arr, el, position) {
  for (let i = arr.length; i > position; i--) {
    arr[i] = arr[i - 1];
  }
  arr[position] = el;
  return arr;
}
// Time complexity: On
console.log(insertElInArrOnPos(array, 33, 3));
// ======================================================================================
// find an element in array and return its position, otherwise return -1

function findElInArr(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) return i;
  }
  return -1;
}
// Time complexity: On
// console.log(findElInArr(array, 5));
// ======================================================================================
// remove an element from array
function removeElInArr(arr, el) {
  let indx;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el) {
      indx = i;
      break;
    }
  }

  if (!indx) {
    return 'No element in array';
  }

  for (let i = indx; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length -= 1;
  return arr;
}
// Time complexity: On
// console.log(removeElInArr(array, 5));
