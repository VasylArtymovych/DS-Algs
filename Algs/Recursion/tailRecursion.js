const getSum = (n) => {
  if (n === 1) return 1;
  return getSum(n - 1) + n;
};

//! when func return only recursive call;
const getSumTail = (n, acc = 0) => {
  if (n === 0) {
    return acc;
  }

  return getSumTail(n - 1, n + acc);
};

console.log(getSum(5));
console.log(getSumTail(5));
