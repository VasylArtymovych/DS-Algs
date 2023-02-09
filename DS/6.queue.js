class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

//todo: Queue useing Singly Linked List with head and tail nodes:
class QueueSll {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp.data;
  }
}

const qSll = new QueueSll();
qSll.enqueue(33).enqueue(55).enqueue(77);
console.log('qSll', qSll);
console.log(qSll.dequeue());
console.log('qSll', qSll);

//todo: Queue useing Singly Linked List with head and tail nodes:
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  size() {
    return this.length;
  }
  isEmpty() {
    return this.front === null && this.rear === null;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length += 1;
    return this;
  }
  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      let itemValue = this.front.value;
      this.front = this.front.next;
      this.length -= 1;
      if (this.size() === 0) {
        this.rear = null;
      }
      return itemValue;
    }
  }
}

let q = new Queue();
q.enqueue(1).enqueue(2).enqueue(3);
// q.dequeue();
// q.dequeue();
// q.dequeue();
console.log(q);

//todo: Queue useing array:
class Queue2 {
  constructor(capacity) {
    this.store = new Array(capacity);
    this.front = 0;
    this.rear = 0;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  enqueue(value) {
    if (this.rear === this.store.length) {
      throw new Error('Queue is full');
    } else {
      this.store[this.rear] = value;
      this.rear += 1;
      return this;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    } else {
      let itemValue = this.store[this.front];
      this.store[this.front] = null;
      this.front += 1;
      return itemValue;
    }
  }
}

let q2 = new Queue2(3);
// q2.enqueue(1).enqueue(2).enqueue(3);
// console.log(q2.dequeue());
// console.log(q2.dequeue());
// console.log(q2.dequeue());
// // console.log(q2.dequeue());
// console.log(q2);
