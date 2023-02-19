// Time complexity - Olog2n; Space: O(1)
const binarySearch = (arr, elementToSearch) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // if middle is search value - return it right away
    if (arr[mid] === elementToSearch) {
      return mid;
    } else if (arr[mid] < elementToSearch) {
      // if middle is LESS
      // move to the RIGHT part of array
      left = mid + 1;
    } else if (arr[mid] > elementToSearch) {
      // if middle is BIGGER
      // move to the LEFT part of array
      right = mid - 1;
    }
  }

  return -1;
};

const binarySearchRecursive = (
  arr,
  elementToSearch,
  left = 0,
  right = arr.length
) => {
  // termination check
  if (right >= left) {
    let mid = Math.floor(left + (right - left) / 2);

    // if middle is what we need - return index
    if (arr[mid] === elementToSearch) {
      return mid;
    }

    // if middle is BIGGER
    // call search recursively from LEFT part of array
    if (arr[mid] > elementToSearch) {
      return binarySearchRecursive(arr, elementToSearch, left, mid - 1);
    }

    // if middle is LESS
    // call search recursively from RIGHT part of array
    return binarySearchRecursive(arr, elementToSearch, mid + 1, right);
  }

  return -1;
};

// RESULTS:
const arrSorted = [-34, -5, 0, 1, 5, 6, 8, 9, 11, 23, 24, 77, 82, 95, 102, 923];

let searchVal = 11;
const out = '[%s] search for value %d. Index: %d \n';

console.log(out, 'binary', searchVal, binarySearch(arrSorted, searchVal));
console.log(
  out,
  'binary recursive',
  searchVal,
  binarySearchRecursive(arrSorted, searchVal)
);
