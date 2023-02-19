const { Node, n1, n2, n3, n4, n5, n6 } = require('./data');
/**
 * Given a linked list, check if the linked list has a loop or not.
 *
 * Дано однозвʼязаний список, в якому (для простоти) є тільки цілі числа.
 * Треба визначити чи є цикл в цьому списку.
 * Циклом ми називаємо множину елементів які формують "кільце"
 * Наприклад:
 * 1 -> 2 -> 3 -> 4 -> 5
 * .....|--------------|
 *
 * Тут елемент (5) вказує знову на елемент (2) і створує цикл таким чином.
 *
 * На вход дається обʼєкт Node (val, next).
 * Функція має повернути TRUE якщо цикл існує, або FALSE якщо його немає.
 *
 * Доповнювати структуру Node неможна, так само як змінювати значення елементів.
 * Відомо, що ця структура даних може бути дуже великою, тому рішення має
 * працювати без додаткової памʼяті.
 *
 * Майте на увазі, що приклади містять числа упорядковані тільки для кращої
 * візуалізації, упорядкованість даних НЕ гарантується.
 */

//todo: detect loop using hashmap:
// Time: O(n); Space: O(n);
const detectLoopHash = (n) => {
  let s = new Set();

  while (n !== null) {
    if (s.has(n)) {
      return true;
    }

    s.add(n);

    n = n.next;
  }

  return false;
};

//todo Detect loop in a Linked list by modification in node structure:
// Time: O(n); Space: O(1);
const detectLoopModify = (n) => {
  while (n !== null) {
    if (n.flag === 1) {
      return true;
    }

    n.flag = 1;

    n = n.next;
  }

  return false;
};

//todo Detect loop in a linked list using Floyd’s Cycle-Finding Algorithm:
/** This algorithm is used to find a loop in a linked list. 
  It uses two pointers one moving twice as fast as the other one. 
  The faster one is called the faster pointer and the other one is called the slow pointer. 
  - Traverse linked list using two pointers.
  - Move one pointer(slow_p) by one and another pointer(fast_p) by two.
  - If these pointers meet at the same node then there is a loop. 
  If pointers do not meet then the linked list doesn’t have a loop.
 */
// Time: O(n); Space: O(1);
const detectLoopFloyd = (n) => {
  let slowPointer = n;
  let fastPointer = n;

  while (
    slowPointer !== null &&
    fastPointer !== null &&
    fastPointer.next !== null
  ) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
};

//todo Detect loop in a linked list by Marking visited nodes without modifying Node structure:
// Time: O(n); Space: O(1);
const detectLoop = (n) => {
  let temp = new Node();

  while (n !== null) {
    if (n.next === null) {
      return false;
    }

    if (n.next === temp) {
      return true;
    }

    let next = n.next;
    n.next = temp;
    n = next;
  }

  return false;
};

//Reaults:
const out = '[%s]: Does Linked list have a loop: %s';
// console.log(out, 'detectLoopHash', detectLoopHash(n1)); // true
// console.log(out, 'detectLoopHash', detectLoopHash(n2)); // false
// console.log(out, 'detectLoopHash', detectLoopHash(n3)); // true
// console.log(out, 'detectLoopHash', detectLoopHash(n4)); // true
// console.log(out, 'detectLoopHash', detectLoopHash(n5)); // false
// console.log(out, 'detectLoopHash', detectLoopHash(n6)); // true

// console.log(out, 'detectLoopModify', detectLoopModify(n1));
// console.log(out, 'detectLoopModify', detectLoopModify(n2));
// console.log(out, 'detectLoopModify', detectLoopModify(n3));
// console.log(out, 'detectLoopModify', detectLoopModify(n4));
// console.log(out, 'detectLoopModify', detectLoopModify(n5));
// console.log(out, 'detectLoopModify', detectLoopModify(n6));

// console.log(out, 'detectLoopFloyd', detectLoopFloyd(n1));
// console.log(out, 'detectLoopFloyd', detectLoopFloyd(n2));
// console.log(out, 'detectLoopFloyd', detectLoopFloyd(n3));
// console.log(out, 'detectLoopFloyd', detectLoopFloyd(n4));
// console.log(out, 'detectLoopFloyd', detectLoopFloyd(n5));
// console.log(out, 'detectLoopFloyd', detectLoopFloyd(n6));

// console.log(out, 'detectLoop', detectLoop(n1));
// console.log(out, 'detectLoop', detectLoop(n2));
// console.log(out, 'detectLoop', detectLoop(n3));
// console.log(out, 'detectLoop', detectLoop(n4));
// console.log(out, 'detectLoop', detectLoop(n5));
// console.log(out, 'detectLoop', detectLoop(n6));
