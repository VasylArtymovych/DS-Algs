// Implementation using Array: _______________________________________________
class HashTable {
  constructor(capacity) {
    this.store = new Array(capacity);
    this.size = capacity;
  }

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }

  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
  }

  get(key) {
    if (!this.store[this.hash(key)]) {
      return null;
    } else {
      return this.store[this.hash(key)].find((item) => item.key === key)?.value;
    }
  }

  delete(key) {
    if (!this.store[this.hash(key)]) {
      return null;
    } else {
      let index = this.store[this.hash(key)].findIndex(
        (item) => item.key === key
      );
      if (index !== -1) {
        this.store[this.hash(key)].splice(index, 1);
        return `Key: ${key} was deleted`;
      } else {
        return null;
      }
    }
  }
}

// const ht = new HashTable(7);
// console.log(ht);
// ht.add('ab', 11);
// ht.add('a', 12);
// ht.add('ac', 22);
// ht.add('ad', 33);
// console.log(ht.get('ad'));
// console.log(ht.get('a'));
// console.log(ht.delete('ad'));
// console.log(ht.delete('a'));

// Implementation using Linked List: ______________________________________________________
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

// var htc = new HashTableChaining(5);
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
