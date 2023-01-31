//todo: add two numbers using linked list.

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

//* Example: 342 + 465 = 807.
const L1 = new Node(2);
L1.next = new Node(4);
L1.next.next = new Node(3);

const L2 = new Node(5);
L2.next = new Node(6);
L2.next.next = new Node(4);

// Recurcive method passing values as paramethers:
// Time and Memory Complexity: O(N)
const addTwoNumRecursive = (a, b, c = 0) => {
  let val = a.data + b.data + c;
  let ret = new Node(val % 10);

  if (a.next || b.next) {
    ret.next = addTwoNumRecursive(
      a.next || 0,
      b.next || 0,
      Math.trunc(val / 10)
    );
  }

  return ret;
};

let result = addTwoNumRecursive(L1, L2);
console.log('result1', result);

// Using Iteration:
// O(N);
const addTwoNumIteratin = (L1, L2) => {
  let a = L1;
  let b = L2;
  let c = 0;

  let current = new Node();
  let ret = current;

  while (a || b) {
    let val = (a ? a.data : 0) + (b ? b.data : 0) + c;
    c = Math.trunc(val / 10);
    current.data = val % 10;
    current.next = new Node();
    current = current.next;
    a = a && a.next;
    b = b && b.next;
  }

  return ret;
};

let result2 = addTwoNumIteratin(L1, L2);
console.log('result2', result2);

// log result:
let logResult = result;
let logResult2 = result2;

do {
  console.log(logResult.data);
} while ((logResult = logResult.next));

while (logResult2.data !== undefined) {
  console.log(logResult2.data);
  logResult2 = logResult2.next;
}
