class Node {
  constructor(value) {
    this.data = value;
    this.prev = null;
    this.next = null;
  }
  toString() {
    return `${this.data}`;
  }
}

class DoblyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length += 1;
      return this;
    }
  }

  uppend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
  }

  find(value) {
    if (this.head === null) {
      return null;
    } else if (this.head.data === value) {
      return this.head;
    } else if (this.tail.data === value) {
      return this.tail;
    } else {
      let current = this.head.next;
      while (current) {
        if (current.data === value) {
          return current;
        } else {
          current = current.next;
        }
      }
      return null;
    }
  }

  delete(value) {
    if (this.head === null) {
      return null;
    }

    let temp = this.head;
    while (temp !== null && temp.data !== value) {
      temp = temp.next;
    }

    if (temp === null) {
      document.write('Value not found');
      return null;
    } else if (temp === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length -= 1;
      return this;
    } else if (temp === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.length -= 1;
      return this;
    } else {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      this.length -= 1;
      return this;
    }
  }

  print() {
    let res = [];
    let current = dll.head;
    while (current) {
      res.push(current);
      current = current.next;
    }
    return res.toLocaleString();
  }
}

const dll = new DoblyLinkedList();
dll.prepend(1).prepend(2).prepend(3);
dll.uppend(4).uppend(5).uppend(7);
dll.delete(5).delete(74);
console.log(dll);

console.log('find', dll.find(5));
console.log('print', dll.print());
// print nodes:
