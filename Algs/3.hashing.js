// Implementation of hashing using linkedLIst:
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class HashTableChaining {
  constructor(size) {
    this.store = new Array(size).fill(null);
  }

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.store.length;
  }

  insert(key, value) {
    const newNode = new Node({ key, value });
    const chain = this.hash(key);
    if (this.store[chain] === null) {
      this.store[chain] = newNode;
    } else {
      let temp = this.store[chain];
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
  }

  delete(key) {
    const chain = this.hash(key);
    let temp = this.store[chain];

    if (temp !== null) {
      if (temp.data.key === key) {
        this.store[chain] = temp.next;
        return 1;
      } else {
        while (temp.next !== null) {
          if (temp.next.data.key === key) {
            temp.next = temp.next.next;
            return 1;
          }
          temp = temp.next;
        }
      }
    }
    return 0;
  }

  find(key) {
    const chain = this.hash(key);
    let temp = this.store[chain];
    while (temp !== null) {
      if (temp.data.key === key) {
        return temp.data.value;
      }
      temp = temp.next;
    }
    return null;
  }

  print() {
    for (let key in this.store) {
      let temp = this.store[key];
      document.write(`chain[${key}] --> `);
      while (temp !== null) {
        document.write(`${temp.data.value} --> `);
        temp = temp.next;
      }
      document.write(`${null}<br>`);
    }
  }
}

var htc = new HashTableChaining(5);
// htc.insert('ba', 1);
// htc.insert('bb', 2);
// htc.insert('cc', 3);
// htc.insert('ab', 4);
// htc.insert('a', 5);
// htc.insert('aa', 7);
// htc.insert('abc', 8);
// htc.delete('ab');
// console.log(htc.find('aa'));
// console.log(htc);
// htc.print();

// Implement hash table with linear probing - Insert:________________________-
const hTable = new Array(5).fill(-1);
const insert = (value) => {
  const key = value % hTable.length;
  let index = key;

  while (hTable[index] !== -1) {
    index = (index + 1) % hTable.length;
    if (index === key) {
      return console.log('hTable is full!');
    }
  }

  hTable[index] = value;
};

insert(1);
insert(2);
insert(3);
insert(4);
insert(5);
insert(1);

console.log('hTable', hTable);
