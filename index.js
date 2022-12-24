// is two diferent sorted array, write func which merge them into one in accending order of elements:
const a = [1, 2, 5, 7, 9];
const b = [4, 6, 7, 8];

const merge = (a, b) => {
  let i = 0;
  let j = 0;
  const res = [];

  while (i < a.length || j < b.length) {
    const firstEl = a[i];
    const secondEl = b[j];

    if (firstEl === undefined) {
      res.push(secondEl);
      j += 1;
    }

    if (secondEl === undefined) {
      res.push(firstEl);
      i += 1;
    }

    if (firstEl === secondEl) {
      res.push(firstEl, secondEl);
      i += 1;
      j += 1;
    }

    if (firstEl < secondEl) {
      res.push(firstEl);
      i += 1;
    }

    if (firstEl > secondEl) {
      res.push(secondEl);
      j += 1;
    }
  }

  return res;
};
// result:
// console.log(merge(a, b));
