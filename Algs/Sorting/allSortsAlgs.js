const main = () => {
  const arrays = [
    [8, 2, 1, 6, 3, 1, 8, -2, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  for (const arr of arrays) {
    let a = [...arr];
    stupidSort(a);
    console.log('Stupid sort: ' + a.toString());

    a = [...arr];
    gnomeSort(a);
    console.log('Gnome sort: ' + a.toString());

    a = [...arr];
    bubbleSort(a);
    console.log('Bubble sort: ' + a.toString());

    a = [...arr];
    cocktailSort(a);
    console.log('Cocktail sort: ' + a.toString());

    a = [...arr];
    combSort(a);
    console.log('Comb sort: ' + a.toString());

    a = [...arr];
    selectionSort(a);
    console.log('Selection sort: ' + a.toString());

    a = [...arr];
    insertionSort(a);
    console.log('Insertion sort: ' + a.toString());

    a = [...arr];
    shellSort(a);
    console.log('Shell sort: ' + a.toString());

    console.log();
  }
};

const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

const stupidSort = (arr) => {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] <= arr[i + 1]) {
      i++;
    } else {
      swap(arr, i, i + 1);
      i = 0;
    }
  }
};

const gnomeSort = (arr) => {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] <= arr[i + 1]) {
      i++;
    } else {
      swap(arr, i, i + 1);
      // moving 1 step back only to recheck it, as we swapped element there
      if (--i === -1) {
        i = 0;
      }
    }
  }
};

const bubbleSort = (arr) => {
  const n = arr.length;
  let swapped = false;
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      // large element will 'bubble up' to the end
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
};

// EXTRA ONE :)
const bubbleSortRecursive = (arr, n) => {
  // Base case
  if (n === 1) return;

  for (let i = 0; i < n - 1; i++)
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }

  // Largest element is fixed,
  // recur for remaining array
  bubbleSortRecursive(arr, n - 1);
};

const cocktailSort = (arr) => {
  let left = 0;
  let right = arr.length;

  let swapped = true;
  while (swapped) {
    // 'bubble up' largest element to the end
    swapped = false;
    for (let i = left; i < right - 1; ++i) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    // fix the last element
    right--;

    // 'bubble down' smallest element to the beginning (moving from right to left)
    swapped = false;
    for (let i = right - 1; i >= left; i--) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    // fix the first element
    left++;
  }
};

const combSort = (arr) => {
  let n = arr.length;
  // init start gap
  let gap = n;
  let swapped = true;

  // Keep running while gap is more than 1 and last iteration caused a swap
  while (gap != 1 || swapped) {
    // Shrink gap by Shrink factor
    // this is a bit more efficient than using 1.247
    gap = Math.max(Math.floor((gap * 10) / 13), 1);

    swapped = false;
    // Compare all elements with current gap
    for (let i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        swap(arr, i, i + gap);
        swapped = true;
      }
    }
  }
};

const selectionSort = (arr) => {
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

main();
