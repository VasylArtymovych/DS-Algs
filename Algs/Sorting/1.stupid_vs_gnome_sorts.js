const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};
/**
 * Stupid sort:
 * порівнюємо елементи і якщо arr[i] > arr[i+1] тоді міняємо іх місцями і починаємо знову всі
 * кроки з початку, якщо ні тоді йдемо до наступноі ітераціі.} arr
 */
// Time: O((n+1)!); Space O(1);
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

/**
 * Gnome sort:
 * Порівнюємо елементи і якщо arr[i] > arr[i+1] тоді міняємо іх місцями,
 * якщо ні тоді йдемо до наступноі ітераціі,
 * різниця тільки з STUPID SORT в тому що не вертаємось на початок, а коли поміняли елементи місцями
 * вертаємось на крок назад і перевіряємо зновую
 */

// Time: O((n+1)!); Space O(1);
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

// Results:
const checkResults = () => {
  const arrays = [
    [8, 2, 1, 6, 3, 1, 8, -2, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1],
  ];

  for (let arr of arrays) {
    let a = [...arr];
    stupidSort(a);
    console.log('Stupid sort: ', a.toString());

    a = [...arr];
    gnomeSort(a);
    console.log('Gnome sort: ', a.toString());
  }
};
checkResults();
