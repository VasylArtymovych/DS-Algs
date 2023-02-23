// Time: O(n log n^2);
const shellSort = (arr) => {
  let h = 1;
  let n = arr.length;
  while (h < n) {
    h = h * 3 + 1;
  }
  h = Math.floor(h / 3);
  let c;
  let j;

  while (h > 0) {
    for (let i = h; i < n; i++) {
      c = arr[i];
      j = i;
      while (j >= h && arr[j - h] > c) {
        arr[j] = arr[j - h];
        j = j - h;
      }
      arr[j] = c;
    }
    h = Math.floor(h / 2);
  }
};
