class Hashing {
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

const ht = new Hashing(7);
// console.log(ht);
// ht.add('ab', 11);
// ht.add('a', 12);
// ht.add('ac', 22);
// ht.add('ad', 33);
// console.log(ht.get('ad'));
// console.log(ht.get('a'));
// console.log(ht.delete('ad'));
// console.log(ht.delete('a'));
