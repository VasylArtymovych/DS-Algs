class HashTable {
  constructor(capacity) {
    this.store = new Array(capacity);
  }

  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.store.length;
  }

  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
    return this;
  }

  get(key) {
    if (!this.store[this.hash(key)]) return null;
    return this.store[this.hash(key)].find((el) => el.key === key).value;
  }
}

const ht = new HashTable(5);
ht.add('ab', 11).add('abc', 22).add('ad', 33).add('ae', 44).add('ba', 45);
console.log(ht.get('ba'));
console.log('ht', ht);
