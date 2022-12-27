const arr = [20, 11, -3, 70, 50, 5, 40, 38];

const selection_sort = (arr) => {
  let arrCopy = [...arr];
  for (let i = 0; i < arrCopy.length - 1; i += 1) {
    for (let j = i + 1; j < arrCopy.length; j += 1) {
      if (arrCopy[i] > arrCopy[j]) {
        [arrCopy[i], arrCopy[j]] = [arrCopy[j], arrCopy[i]];
      }
    }
  }
  return arrCopy;
};

console.log(selection_sort(arr));
