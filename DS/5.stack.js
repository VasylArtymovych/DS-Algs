class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}
// Stack using LinkedList:
class Stack {
  constructor(capacity) {
    this.root = null;
    this.length = capacity;
    this.n = 0;
  }

  isEmpty() {
    return this.n === 0;
  }

  size() {
    return this.n;
  }

  push(value) {
    if (this.n === this.length) {
      throw new Error('stack is full');
    } else {
      const newNode = new Node(value);
      newNode.next = this.root;
      this.root = newNode;
      this.n += 1;
      return this;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('stack is empty');
    } else {
      let oldFirst = this.root;
      this.root = oldFirst.next;
      this.n -= 1;
      return oldFirst.data;
    }
  }
}
const s = new Stack(3);
s.push(1).push(2).push(3);
// console.log('1', s.pop());
// console.log('2', s.pop());
// console.log('3', s.pop());
// console.log(s.pop());
console.log('stack', s);
console.log(s.size());

//====================================================================================
// Stack using array:
class Stack2 {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.top = -1;
  }

  push(value) {
    if (this.top === this.size - 1) {
      console.log('stack is full');
      return this;
    } else {
      this.top += 1;
      this.arr[this.top] = value;
      return this;
    }
  }

  pop() {
    if (this.top === -1) {
      console.log('stack is empty');
      return this;
    } else {
      this.arr[this.top] = undefined;
      this.top -= 1;
      return this;
    }
  }
}

const s2 = new Stack2(3);
// s2.push(1).push(2).push(3).push(4).pop();
// console.log(s2);
