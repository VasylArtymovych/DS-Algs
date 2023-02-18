let arrOfInt = [87, 91, 34, 50, 0, -34, 27];

// Time complexity O(N): Space: O(1);
const linearSearch = (arr, elementToSearch) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elementToSearch) {
      return i;
    }
  }

  return -1;
};

// Time complexity O(N): Space: O(1);
const linearSearchRecursive = (
  arr,
  elementToSearch,
  from = 0,
  to = arr.length
) => {
  if (from === to) {
    return -1;
  }

  return arr[from] === elementToSearch
    ? from
    : linearSearchRecursive(arr, elementToSearch, from + 1, to);
};

// RESULTS:
const arr = [82, 23, 95, 1, -34, 6, 923, 24, 5, 8, 77, 102, 0, 9, 11, -5];

let searchVal = -34;
const out = '[%s] search for value %d. Index: %d \n';

console.log(out, 'linear', searchVal, linearSearch(arr, searchVal));
console.log(
  out,
  'linear recursive',
  searchVal,
  linearSearchRecursive(arr, searchVal)
);
