const main = () => {
  let a = [8, 4, 2, 1, 4, 3, 87, 5, 6, 2, 5, 28, 2, 1, 1, 5];

  countSortSimple(a);
  console.log('Counting sort simple: ' + a.toString());

  // a = [-5, 29, 2, 1, 5, 3, 4, 1, -5, -2, -5, -6, 0, 10, 5, 95, 10000];
  a = [-5, 7, 3, 1, -2, 0, 10];
  countSort(a);
  console.log('Counting sort: ' + a.toString());
};

// will fail with negative numbers
const countSortSimple = (arr) => {
  const counter = new Array(1000).fill(0);

  for (const a of arr) {
    counter[a]++;
  }

  let i = 0;
  let j = 0;
  while (j < 1000) {
    if (counter[j] === 0) {
      j++;
    } else {
      counter[j]--;
      arr[i++] = j;
    }
  }
};

// will work with negative numbers, but requires knowing min/max or finding them
const countSort = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);

  let range = max - min + 1;

  const count = new Array(range).fill(0);
  const output = new Array(arr.length).fill(0);

  for (const a of arr) {
    count[a - min]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    output[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
  }

  // copy in sorted order to same array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
};

main();
