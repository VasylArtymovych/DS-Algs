/**
 * Вам дано масив цілих чисел nums.
 * Поверніть мінімальну кількість операцій необхідних для того, щоб зробити nums
 * строго зростаючим.
 *
 * Одна операція – це збільшення будь-якого елемента в масиві на 1.
 *
 * Масив nums буде строго зростаючим якщо
 * nums[i] < nums[i+1] для всіх 0 <= i < nums.length - 1
 * Масив з одним елементом вважається строго зростаючим.
 *
 * Приклад:
 * Input: nums = [1,1,1]
 * Output: 3
 *
 * Пояснення: строго зростаючим буде масив [1,2,3], тому необхідно збільшити
 * nums[1] рівно 1 раз, а nums[2] 2 разу.
 */

//todo: O(n), with O(n) memory as well
const makeIncreasing = (nums) => {
  let changeCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const diff = nums[i - 1] - nums[i] + 1;
      nums[i] += diff; // same as "nums[i] = nums[i-1] + 1"
      changeCount += diff;
    }
  }

  return changeCount;
};

console.log(makeIncreasing([1, 1, 1])); //  3
console.log(makeIncreasing([1, 2, 1])); //  2
console.log(makeIncreasing([-3])); //  0
console.log(makeIncreasing([-3, -2, 10])); //  0
console.log(makeIncreasing([-3, -2, -5])); //  4
console.log(makeIncreasing([1, 5, 90, 0])); //  91
console.log(makeIncreasing([1, 0, 5, 4, 90, 0])); //  95

//todo: Using only 2 variables to toss elements, no need to change nums array
//todo: makes algorithm O(1) by memory
const makeIncreasing2 = (nums) => {
  let changeCount = 0;
  let prevCorrectElement = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currElement = nums[i];
    if (currElement <= prevCorrectElement) {
      let diff = prevCorrectElement - currElement + 1;
      currElement += diff;
      changeCount += diff;
    }

    prevCorrectElement = currElement;
  }

  return changeCount;
};

console.log(makeIncreasing2([1, 1, 1])); //  3
console.log(makeIncreasing2([1, 2, 1])); //  2
console.log(makeIncreasing2([-3])); //  0
console.log(makeIncreasing2([-3, -2, 10])); //  0
console.log(makeIncreasing2([-3, -2, -5])); //  4
console.log(makeIncreasing2([1, 5, 90, 0])); //  91
console.log(makeIncreasing2([1, 0, 5, 4, 90, 0])); //  95
