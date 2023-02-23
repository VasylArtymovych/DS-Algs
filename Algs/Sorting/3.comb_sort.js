const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
/**
 * Принцип алгоритму як у бульбашки тільки переставляються не сусідні елементи,
 * а з певним гепом, який розраховується для оптимізаціі алгоритму.
 * Або береться 1.247
 * Але цей алгоритм втрачає стійкість тому що порівнюються не сусідні елементи а з гепом,
 * тому два сусідні ел з однаковими ключами можуть поміняти положення відносно один одного,
 * в результаті виконання алгоритму.
 *
 */

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

// Results:
const checkResults = () => {
  const arrays = [
    [8, 2, 1, 6, 3, 1, 8, -2, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  for (let arr of arrays) {
    let a = [...arr];
    combSort(a);
    console.log('Comb sort: ', a.toString());
  }
};
checkResults();
