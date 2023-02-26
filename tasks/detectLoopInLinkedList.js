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
/** 
 * What is Floyd’s Cycle detection algorithm?
Floyd’s Cycle detection algorithm is used to detect whether the linked list 
has a cycle in it and what is the starting point(green node in the above diagram) of the cycle.

* Algorithm to find whether there is a cycle or not :
1. Declare 2 nodes say slowPointer and fastPointer pointing to the linked list head.
2. Move slowPointer by one node and fastPointer by 2 nodes till either of one reaches nil.
3. If at any point in the above traversal, slowPointer and fastPointer are found to be pointing 
to the same node, which implies the list has a cycle

* Algorithm to find the starting node of the cycle:
After figuring out whether there is a cycle or not perform the following steps

1. Reset the slowPointer to point to the head of the linked list and keep the 
fastPointer at the intersected position.
2. Move both the fastPointer and slowPointer pointers by one node.
3. The point at which they will intersect is the starting of the cycle.
 */
// Time: O(n); Space: O(1);
const detectLoopFloyd = (n) => {
  let slowPointer = n;
  let fastPointer = n;

  while (slowPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }
  }

  return false;
};
const detectLoopStartPoint = (n) => {
  // Step 1: Point s and f to head
  let slowPointer = n;
  let fastPointer = n;
  // Step 2: Move s by 1 step and f by 2 step
  while (slowPointer && fastPointer.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      // Step 3: There exists a cycle
      // Step 4: Reset s
      slowPointer = n;

      while (slowPointer !== fastPointer) {
        // Step 5: Move s & f by one step
        slowPointer = slowPointer?.next;
        fastPointer = fastPointer?.next;
      }
      // Step 6: Return the values
      return { isCycle: true, nodeVal: slowPointer.val };
    }
  }

  return { isCycle: false, nodeVal: null };
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
// console.log(out, 'detectLoopHash', detectLoopHash(n1)); // false
// console.log(out, 'detectLoopHash', detectLoopHash(n2)); // true // on n2
// console.log(out, 'detectLoopHash', detectLoopHash(n3)); // true // on n1
// console.log(out, 'detectLoopHash', detectLoopHash(n4)); // true // on n4
// console.log(out, 'detectLoopHash', detectLoopHash(n5)); // false
// console.log(out, 'detectLoopHash', detectLoopHash(n6)); // true // on n6

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

console.log(out, 'detectLoopStartPoint', detectLoopStartPoint(n1));
console.log(out, 'detectLoopStartPoint', detectLoopStartPoint(n2));
console.log(out, 'detectLoopStartPoint', detectLoopStartPoint(n3));
console.log(out, 'detectLoopStartPoint', detectLoopStartPoint(n4));
console.log(out, 'detectLoopStartPoint', detectLoopStartPoint(n5));
console.log(out, 'detectLoopStartPoint', detectLoopStartPoint(n6));

// console.log(out, 'detectLoop', detectLoop(n1));
// console.log(out, 'detectLoop', detectLoop(n2));
// console.log(out, 'detectLoop', detectLoop(n3));
// console.log(out, 'detectLoop', detectLoop(n4));
// console.log(out, 'detectLoop', detectLoop(n5));
// console.log(out, 'detectLoop', detectLoop(n6));
