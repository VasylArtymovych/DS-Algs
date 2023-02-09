class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
  toString() {
    return `${this.data}`;
  }
}

// Time complexity: insertion and removal in linked list is O(1)
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length += 1;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length += 1;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  insertAfter(value, prevNode) {
    if (prevNode === null) return null;
    let newNode = new Node(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length += 1;
    if (newNode.next === null) {
      this.tail = newNode;
    }
    return this;
  }

  find(value) {
    if (!this.head) return null;
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return current;
      } else {
        current = current.next;
      }
    }
    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    let deletedNode = null;

    if (this.head.data === value && this.tail.data === value) {
      deletedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return deletedNode;
    }

    if (this.head.data === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return deletedNode;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === value) {
        deletedNode = current.next;
        current.next = current.next.next;
        this.length -= 1;
        if (this.tail.data === value) {
          this.tail = current;
        }
        return deletedNode;
      } else {
        current = current.next;
      }
    }
    return deletedNode;
  }

  toArray() {
    const nodesArr = [];
    let current = this.head;
    while (current) {
      nodesArr.push(current);
      current = current.next;
    }
    return nodesArr;
  }

  toString() {
    return this.toArray().toString();
  }
}

const ll = new LinkedList();
ll.append('A1').append('A2').append('A3');
ll.prepend('B1').prepend('B2');
// console.log('deleted', ll.delete('A3'));
// console.log(JSON.stringify(ll));
// console.log('finded', ll.find('A2'));
// console.log(ll.toArray());
// console.log(ll.toString());

// display all ll nodes:
// let temp = ll.head;
// while (temp) {
//   console.log(temp);
//   temp = temp.next;
// }

// Linked list only with head: ============================================
class LinkedList2 {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length += 1;
    return this;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.length += 1;
      return this;
    } else {
      let lastNode = this.head;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = newNode;
      this.length += 1;
      return this;
    }
  }

  find(value) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.data === value) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    let deletedNode = null;

    if (this.head.data === value) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.length -= 1;
      return deletedNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next.data === value) {
          deletedNode = current.next;
          current.next = current.next.next;
          this.length -= 1;
          return deletedNode;
        } else {
          current = current.next;
        }
      }
    }
    return deletedNode;
  }
}

const ll2 = new LinkedList2();
ll2.append('A1').append('A2');
ll2.prepend('B1').prepend('B2');
// console.log(ll2.find('B2'));
// console.log(ll2.delete('A2').toString());
console.log(JSON.stringify(ll2));
