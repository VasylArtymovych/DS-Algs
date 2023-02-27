/**
 * Given the root of a binary tree, return the sum of values of its deepest leaves.
 *
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8] 
 * Output: 15                                               
 *
 * Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
 * Output: 19
 * 
 * This way, finding the parent is simply: (index-1)/2. 
 * And finding the two children is just 2*index and 2*index + 1.
 * 
 * Constraints:
  The number of nodes in the tree is in the range [1, 104].
  1 <= Node.val <= 100
 */

let maxHeight;
let maxSum;

const deepestLeavesSum = function (root) {
  maxHeight = -1;
  maxSum = 0;
  dfs(root, 0);
  return maxSum;
};

const dfs = (curr, height) => {
  if (curr === null) {
    return;
  }

  height++;
  dfs(curr.left, height);

  if (curr.left === null && curr.right === null) {
    if (height > maxHeight) {
      maxHeight = height;
      maxSum = 0;
    }
    if (height === maxHeight) {
      maxSum += curr.val;
    }
  }

  dfs(curr.right, height);
};
console.log(deepestLeavesSum());
