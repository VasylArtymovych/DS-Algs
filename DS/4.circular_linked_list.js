class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
  toString() {
    return `${this.data}`;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  prepend(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
      this.length += 1;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
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
      this.tail.next = newNode;
      this.length += 1;
      return this;
    } else {
      this.tail.next = newNode;
      newNode.next = this.head;
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
      let current = this.head;
      while (current.next !== this.head) {
        if (current.next.data === value) {
          return current.next;
        } else {
          current = current.next;
        }
      }
      return null;
    }
  }

  delete(value) {
    if (this.head === null) {
      return this;
    } else if (this.head.data === value && this.head.next === this.head) {
      this.head = null;
      this.tail = null;
      this.length -= 1;
      return this;
    } else if (this.head.data === value) {
      this.tail.next = this.head.next;
      this.head = this.head.next;
      this.length -= 1;
      return this;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        if (current.next.data === value) {
          current.next = current.next.next;
          this.length -= 1;
          return this;
        } else {
          current = current.next;
        }
      }
      if (this.tail.data === value) {
        current.next = this.head;
        this.tail = current;
        this.length -= 1;
        return this;
      }
      return this;
    }
  }

  print() {
    if (this.head === null) {
      return '';
    }
    let nodesArr = [];
    let current = this.head;
    do {
      nodesArr.push(current);
      current = current.next;
    } while (current !== this.head);
    return nodesArr.toString();
  }
}

const cll = new CircularLinkedList();
cll.prepend(3).prepend(2).prepend(1).uppend(4).uppend(5);
console.log(cll);
console.log(cll.print());
// console.log(cll.find(3));
cll.delete(4).delete(3);
console.log(cll);
console.log(cll.print());

// CircularLinkedList wit only head node:
class CircularLinkedList2 {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      newNode.next = newNode;
      this.head = newNode;
      this.length += 1;
      return this;
    } else {
      let last = this.head;
      while (last.next !== this.head) {
        last = last.next;
      }
      last.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
      return this;
    }
  }

  uppend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      newNode.next = newNode;
      this.head = newNode;
      this.length += 1;
      return this;
    } else {
      let last = this.head;
      while (last.next !== this.head) {
        last = last.next;
      }
      last.next = newNode;
      newNode.next = this.head;
      this.length += 1;
      return this;
    }
  }

  find(value) {
    if (this.head === null) {
      return null;
    } else {
      let last = this.head;
      do {
        if (last.data === value) {
          return last;
        }
        last = last.next;
      } while (last !== this.head);
      return null;
    }
  }

  delete(value) {
    if (this.head === null) {
      return this;
    } else if (this.head.data === value && this.head.next === this.head) {
      this.head = null;
      this.length -= 1;
      return this;
    } else if (this.head.data === value) {
      let last = this.head;
      while (last.next !== this.head) {
        last = last.next;
      }
      last.next = this.head.next;
      this.head = this.head.next;
      this.length -= 1;
      return this;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        if (current.next.data === value) {
          current.next = current.next.next;
          this.length -= 1;
          return this;
        }
        current = current.next;
      }
      return this;
    }
  }

  print() {
    let nodesArr = [];
    let current = this.head;

    do {
      nodesArr.push(current);
      current = current.next;
    } while (current !== this.head);
    return nodesArr.toString();
  }
}

const cll2 = new CircularLinkedList2();
// cll2.prepend(7).prepend(5).prepend(3).uppend(9).uppend(11).uppend(15);
// console.log(cll2);
// console.log(cll2.print());
// // console.log(cll2.find(15));
// console.log('deleted', cll2.delete(11));
// console.log(cll2);
// console.log(cll2.print());
