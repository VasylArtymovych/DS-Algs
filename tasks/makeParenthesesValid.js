/**
 * Рядок з дужками вважається правильним якщо:
 * - Це порожній рядок
 * - Він може бути записаний як AB (А з'єднаний з В), де А і В є правильними
 * - Він може бути записаний як (А), де А є правильним
 *
 * Дано рядок S. За одну операцію ви можете вставити дужку на будь-яку позицію у
 * рядку.
 * Наприклад, якщо s = "()))", ви можете вставити відкриваючу дужку і отримати
 * "(()))", або закриваючу і отримати "())))".
 *
 * Порахуйте мінімальну кількість операцій потрібних щоб зробити рядок S
 * правильним
 *
 * Приклад:
 * Input: s = "())"
 * Output: 1
 * Приклад 2:
 * Input: s = "))(())(("
 * Output: 4, бо треба додати 2 "(" з початку, та 2 ")" в кінці
 */

const countQuantityOfOperations = (s) => {
  let result = 0;
  let openBracket = 0;

  s.split('').forEach((char) => {
    if (char === '(') {
      openBracket += 1;
    } else if (char === ')' && openBracket > 0) {
      openBracket -= 1;
    } else {
      result += 1;
    }
  });

  if (openBracket > 0) {
    result += openBracket;
  }

  return result;
};

console.log(countQuantityOfOperations('(((')); // 3
console.log(countQuantityOfOperations('(()')); // 1
console.log(countQuantityOfOperations(')))(((')); // 6
console.log(countQuantityOfOperations('()))((')); // 4
console.log(countQuantityOfOperations('()')); // 0
