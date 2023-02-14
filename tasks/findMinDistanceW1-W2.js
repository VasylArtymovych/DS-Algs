/**
 * Вам дано список (масив) слів words, та два слова word1, word2.
 * Порахуйте найкоротшу дистанцію між цими двома словами в масиві.
 *
 * word1 і word2 не збігаються і обидва присутні в масиві.
 *
 * Приклад:
 * Input: words = ["practice", "makes", "perfect", "coding", "makes"],
 * word1 = "coding", word2 = "practice"
 * Output: 3
 */

// Time: O(N); Memory: O(1);
const minDistance = (words, word1, word2) => {
  let idxW1 = -1;
  let idxW2 = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      idxW1 = i;
    }
    if (words[i] === word2) {
      idxW2 = i;
    }
    if (idxW1 !== -1 && idxW2 !== -1) {
      let diff = Math.abs(idxW1 - idxW2);
      minDistance = Math.min(minDistance, diff);
    }
  }
  return minDistance;
};

console.log(
  minDistance(
    ['practice', 'makes', 'perfect', 'coding', 'makes'],
    'coding',
    'practice'
  )
); // 3
console.log(
  minDistance(
    ['practice', 'makes', 'perfect', 'coding', 'makes'],
    'makes',
    'coding'
  )
); // 1
console.log(
  minDistance(
    ['coding', 'practice', 'makes', 'perfect', 'coding', 'makes'],
    'makes',
    'coding'
  )
); // 1
console.log(minDistance(['a', 'b', 'c', 'd', 'b', 'q'], 'a', 'q')); // 5
