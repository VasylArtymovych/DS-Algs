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
      console.log('hTable is full!');
      return 0;
    }
  }

  hTable[index] = value;
  return 1;
};
// Implement hash table with linear probing - remove:________________________-
const remove = (value) => {
  let key = value % hTable.length;
  let index = key;

  while (hTable[index] !== value) {
    index = (index + 1) % hTable.length;

    if (key === index) {
      return 0;
    }
  }

  hTable[index] = -1;
  return 1;
};
// Implement hash table with linear probing - search:________________________-
const search = (value) => {
  const key = value % hTable.length;
  let index = key;

  while (hTable[index] !== value) {
    index = (index + 1) % hTable.length;

    if (key === index) {
      return 0;
    }
  }

  return 1;
};

// insert(1);
// insert(1);
// insert(1);
// insert(1);
// insert(5);
// insert(1);
// remove(3);
// remove(5);
// remove(2);
// console.log(search(5));
// console.log(search(4));
// console.log(search(44));
// console.log('hTable', hTable);

// Implement hash table with quadratic probing - Insert:________________________
// Algoritm is f(x) = (x + iˆ2) % size;
// const ht = new Array(5).fill(-1);
// const insertQP = (value) => {
//   const key = value % ht.length;
//   let index = key;
//   let i = 1;
//   while (ht[index] !== -1) {
//     index = (key + Math.pow(i, 2)) % ht.length;
//     console.log('index', index, i);
//     i += 1;
// insertQP(1);    if (key === index) {
//       console.log('ht is full');
//       return 0;
//     }
//   }

//   ht[index] = value;
//   return 1;
// };

// insertQP(1);
// insertQP(1);
// insertQP(1);

// insertQP(1);
// insertQP(1);
// insertQP(1);

console.log(ht);
