const sortedArr = [-67, -5, -3, 2, 4, 5, 6, 7, 12, 32, 44, 45, 71, 77, 99];

const binary_search = (arr, start, end, key) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
// Time complexity - Olog2n
console.log('binary', binary_search(sortedArr, 0, sortedArr.length - 1, 45));

// recursive option:

const binary_search_recursive = (arr, start, end, key) => {
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === key) {
    return mid;
  } else if (arr[mid] < key) {
    return binary_search_recursive(arr, mid + 1, end, key);
  } else {
    return binary_search_recursive(arr, start, mid - 1, key);
  }
};

console.log(
  'binary-recursive',
  binary_search_recursive(sortedArr, 0, sortedArr.length - 1, 45)
);
