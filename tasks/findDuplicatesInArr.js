//todo: Given an integer array nums of length n where all the integers of nums are in the range [1, n]
//todo  and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
//? Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
//? Example 2:
// Input: nums = [1,1,2]
// Output: [1]
//? Example 3:
// Input: nums = [1]
// Output: []

//* Constraints:
//* n == nums.length
//* 1 <= n <= 105
//* 1 <= nums[i] <= n
//* Each element in nums appears once or twice.

// todo: Array map structure:
// Time: O(N); Space: O(N)
const findDuplicates = function (nums) {
  //   0  1  2  3  4  5  6  7
  // [-4, 3, 2,-7, 8, 2,-3,-1]
  // [2,3]

  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let idx = Math.abs(nums[i]) - 1; // as 1 <= nums[i] <= n

    if (nums[idx] < 0) {
      res.push(Math.abs(idx + 1));
    }

    nums[idx] *= -1;
  }

  return res;
};

console.log('res', findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
console.log('res', findDuplicates([1, 1, 2]));
console.log('res', findDuplicates([]));

// todo: Using Object structure:
// Time: O(N); Space: O(1)
const findDuplicates2 = function (nums) {
  const hashMap = {};
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = hashMap[nums[i]] ? (hashMap[nums[i]] += 1) : 1;
  }

  for (let key of Object.keys(hashMap)) {
    if (hashMap[key] > 1) {
      res.push(Number(key));
    }
  }

  return res;
};

console.log('res2', findDuplicates2([4, 3, 2, 7, 8, 2, 3, 1]));
console.log('res2', findDuplicates2([1, 1, 2]));
console.log('res2', findDuplicates2([]));
