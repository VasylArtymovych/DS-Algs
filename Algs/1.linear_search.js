let arr = [87, 91, 34, 50, 0];
let key = 50;

// Time complexity O(N): Space: O(1);
const linearSearch = (arr, size, key) => {
  for (let i = 0; i < size; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

if (linearSearch(arr, arr.length, key) !== -1) {
  document.write(`Key found on pos -> ${linearSearch(arr, arr.length, key)}`);
} else {
  document.write(`${key} <- Key not found`);
}
console.log(linearSearch(arr, arr.length, key));
