/**
 * Вам дана матриця MxN. Поверніть true якщо це Toeplitz матриця. Інакше
 * поверніть false.
 *
 * Toeplitz матриця -- це матриця в якій кожна діагональ
 * (з верхнього лівого елемента до нижнього правого елемента) має однакові
 * значення.
 *
 * Приклад Toeplitz матриці:
 * 1,2,3,4
 * 5,1,2,3
 * 9,5,1,2
 * Діагоналями є: "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4] ".
 */

// Time: O(N*M); Space: O(1);
const toeplitzMatrix = (matrix) => {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  toeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2],
  ])
); // true
console.log(
  toeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 3, 3],
    [9, 5, 1, 2],
  ])
); // false
console.log(
  toeplitzMatrix([
    [1, 2],
    [1, 2],
  ])
); // false
console.log(toeplitzMatrix([[1]])); // true
console.log(
  toeplitzMatrix([
    [1, 1, 1, 11],
    [1, 1, 1, 1],
    [10, 1, 1, 1],
  ])
); // true
