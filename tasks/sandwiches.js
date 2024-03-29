//todo:
/**
 * Шкільний кафетерій пропонує 2 види сендвічів, круглі та квадратні, позначені
 * як 0 і 1 відповідно.
 * Усі учні стоять у черзі. Кожен учень хоче або квадратний або круглий
 * бутерброд.
 *
 * Число сендвічів в кафетерії дорівнює числу учнів. Сендвічі складені один на
 * інший (формують стек). На кожному кроці:
 *
 * - Якщо учень на початку черги віддає перевагу сендвічу зверху стеку - він
 * бере його і залишає чергу.
 * - Інакше, учень не бере сендвіч і йде в кінець черги
 *
 * Це триває поки ніхто з черги учнів не хоче брати верхній сендвіч і тому не
 * можуть дістатися інших і не можуть залишити чергу.
 *
 * Дано 2 масива - учні та сендвічі (students, sandwiches), де sandwiches [i] -
 * вид ith сендвіча в стеку.
 * (i = 0 це вершина стека) і students[j] - уподобання jth учня у початковій
 * черзі
 * (j = 0 це початок (front) черги).
 * Порахуйте кількість учнів, які не зможу поїсти.
 *
 * Приклад:
 * Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
 * Output: 0
 * Пояснення:
 * - Перший учень залишає верхній сендвіч (не бере його бо хоче інший) і йде в
 * кінець черги, тепер students = [1,0,0,1].
 * - Перший учень залишає верхній сендвіч і йде в кінець черги, тепер students =
 * [0,0,1,1].
 * - Перший учень бере верхній сендвіч і йде з черги, тепер students = [0,1,1] і
 * sandwiches = [1,0,1].
 * - Перший учень бере верхній сендвіч і йде з черги, тепер
 * - Перший учень залишає верхній сендвіч і йде в кінець черги, тепер students =
 * [1,1,0].
 * - Перший учень бере верхній сендвіч і йде з черги, тепер students = [1,0] та
 * sandwiches = [0,1].
 * - Перший учень залишає верхній сендвіч і йде в кінець черги, тепер students =
 * [0,1].
 * - Перший учень бере верхній сендвіч і йде з черги, тепер students = [1] та
 * sandwiches = [1].
 * - Перший учень бере верхній сендвіч і йде з черги, тепер students = [] та
 * sandwiches = [].
 * Усі учні взяли їжу, 0 залишилися голодними
 *
 * Додатково: подумайте, чи відрізняється ваш алгоритм від перебору? Напишіть
 * свої думки :)
 */

// Time: O(n^2); Space: O(1);
const countStudentWhichCanNotEat = (students, sandwiches) => {
  while (students.length !== 0 && students.includes(sandwiches[0])) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      students.push(students.shift());
    }
  }
  return students.length;
};

//todo Optimazation:
// Time: O(n); Space: O(1);
const countStudentOptimized = (students, sandwiches) => {
  const studentCounter = students.reduce(
    (acc, student) => {
      acc[student] += 1;
      return acc;
    },
    [0, 0]
  );

  let j = 0;
  while (j < sandwiches.length && studentCounter[sandwiches[j]] > 0) {
    studentCounter[sandwiches[j]] -= 1;
    j += 1;
  }

  return students.length - j;
};

console.log(countStudentWhichCanNotEat([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudentWhichCanNotEat([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
console.log(countStudentWhichCanNotEat([1, 1, 1, 0, 0], [1, 1, 1, 1, 1])); // 2
console.log(countStudentWhichCanNotEat([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])); // 0
console.log(countStudentWhichCanNotEat([1, 1, 1, 1, 1], [0, 0, 0, 0, 0])); // 5
console.log(countStudentWhichCanNotEat([0, 0, 0, 0, 0], [1, 1, 1, 1, 1])); // 5
console.log(countStudentWhichCanNotEat([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
console.log(countStudentWhichCanNotEat([1, 1, 0, 0], [0, 1, 0, 1])); // 0

console.log(countStudentOptimized([1, 1, 0, 0], [0, 1, 0, 1])); // 0
console.log(countStudentOptimized([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
console.log(countStudentOptimized([1, 1, 1, 0, 0], [1, 1, 1, 1, 1])); // 2
console.log(countStudentOptimized([1, 1, 1, 1, 1], [1, 1, 1, 1, 1])); // 0
console.log(countStudentOptimized([1, 1, 1, 1, 1], [0, 0, 0, 0, 0])); // 5
console.log(countStudentOptimized([0, 0, 0, 0, 0], [1, 1, 1, 1, 1])); // 5
console.log(countStudentOptimized([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // 3
console.log(countStudentOptimized([1, 1, 0, 0], [0, 1, 0, 1])); // 0
