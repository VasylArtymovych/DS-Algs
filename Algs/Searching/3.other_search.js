/**
 * - вимагає відсортованого віхдного набору
 * - має фіксований крок
 * - просувається тільки вперед
 * Найкращий крок: k = sqrt(N), N - кількість елементів.
 * Найгірший випадок: n / k кроків, після цього ще k - 1 порівнянь.
 * Це означає n/k + k - 1 порівнянь усього. Для яких k ця функція досягає
 * мінімума?
 * -n / (k^2) + 1 = 0
 * k = sqrt(n)
 * */
const jumpSearch = (arr, elementToSearch) => {
  const n = arr.length;
  let jumpStep = Math.floor(Math.sqrt(n));
  let prevStep = 0;

  while (arr[Math.min(jumpStep, n) - 1] < elementToSearch) {
    prevStep = jumpStep;
    jumpStep += jumpStep;
    if (prevStep >= n) {
      return -1;
    }
  }

  while (arr[prevStep] < elementToSearch) {
    prevStep++;
    if (prevStep === Math.min(jumpStep, n)) {
      return -1;
    }
  }

  if (arr[prevStep] === elementToSearch) {
    return prevStep;
  }

  return -1;
};

/**
 * - Вимагає відсортованого вхідного набору
 * - В ідеалі — рівномірний розподіл елементів
 * - Використовує формули інтерполяції для «передбачення» можливого місця
 *   Formula: lowEnd + (highEnd - lowEnd)*(item - data[lowEnd]) / data[highEnd] - data[lowEnd]
 */
const interpolationSearch = (arr, elementToSearch) => {
  let left = 0;
  let right = arr.length - 1;

  while (
    left <= right &&
    elementToSearch >= arr[left] &&
    elementToSearch <= arr[right]
  ) {
    // interpolation formula for POSSIBLE BEST position of an element
    let pos =
      left +
      Math.floor(
        ((right - left) / (arr[right] - arr[left])) *
          (elementToSearch - arr[left])
      );

    if (arr[pos] === elementToSearch) {
      return pos;
    }

    if (arr[pos] < elementToSearch) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
};

/**
 * Вимагає відсортованого вхідного набору
 * Намагаємось звузити можливий діапазон, переходячи в експоненційні
  позиції (тобто, степені двійки)
 * Використовуємо бінарний пошук на зменшеному діапазоні 
*/
const exponentialSearch = (arr, elementToSearch) => {
  if (arr[0] === elementToSearch) {
    return 0;
  }

  const n = arr.length;
  if (arr[n - 1] === elementToSearch) {
    return n;
  }

  let range = 1;
  while (range < n && arr[range] <= elementToSearch) {
    range = range * 2;
  }

  let left = Math.floor(range / 2);
  let right = Math.min(range, n);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === elementToSearch) {
      return mid;
    } else if (arr[mid] < elementToSearch) {
      left = mid + 1;
    } else if (arr[mid] > elementToSearch) {
      right = mid - 1;
    }
  }

  return -1;
};

const arrSorted = [-34, -5, 0, 1, 5, 6, 8, 9, 11, 23, 24, 77, 82, 95, 102, 923];
const out = 'Search for value %d. Index: %d. %s method';

for (let searchVal of [5, 23, -34, 102, 15]) {
  console.log(out, searchVal, jumpSearch(arrSorted, searchVal), 'jump');
  console.log(
    out,
    searchVal,
    interpolationSearch(arrSorted, searchVal),
    'interpolation'
  );
  console.log(
    out,
    searchVal,
    exponentialSearch(arrSorted, searchVal),
    'exponential'
  );
  console.log(
    out,
    searchVal,
    arrSorted.findIndex((v) => v === searchVal),
    'Built-in find method'
  );
  console.log();
}
