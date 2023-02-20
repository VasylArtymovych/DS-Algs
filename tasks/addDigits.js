/**
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 * Input: num = 38
 * Output: 2
 * Explanation: The process is
 * 38 --> 3 + 8 --> 11
 * 11 --> 1 + 1 --> 2
 * Since 2 has only one digit, return it.
 */

const getDigitalRoot = (n) => {
  while (n > 9) {
    let sum = 0;
    let currN = n;
    while (currN > 0) {
      sum += currN % 10;
      currN = Math.floor(currN / 10);
    }
    n = sum;
  }

  return n;
};

const getDigitalRootRecursive = (n) => {
  // recursion exit/termination
  if (n < 10) return n;

  // return a recursion of the output
  return getDigitalRootRecursive(getDigitSum(n));
};

const getDigitalRootRecursive2 = (n) => {
  // recursion exit/termination
  if (n < 10) return n;

  // return a recursion of the output
  return getDigitalRootRecursive2(getDigitSumRecursive(n));
};

const getDigitSum = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
};

const getDigitSumRecursive = (n) => {
  return n > 0
    ? (n % 10) + getDigitSumRecursive(Math.floor(n / 10)) // recursive call
    : 0; // termination case
};

// RESULTS:
for (let n of [627615, 588225, 7264729, 125, 23894]) {
  console.log(
    'Full iterative approach. Digital root of %s is %s',
    n,
    getDigitalRoot(n)
  );
  console.log(
    'Recursive approach.      Digital root of %s is %s',
    n,
    getDigitalRootRecursive(n)
  );
  console.log(
    'Full recursive approach. Digital root of %s is %s\n',
    n,
    getDigitalRootRecursive2(n)
  );
}
