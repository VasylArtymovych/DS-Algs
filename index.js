// Calculator for counting added string withing operation and numbers:___________________________
function Calculator() {
  this.method = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };

  this.calculate = function (s) {
    let str = s.split(' ');
    let a = +str[0];
    let op = str[1];
    let b = +str[2];

    if (!this.method[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.method[op](a, b);
  };

  this.addMethod = function (name, fn) {
    this.method[name] = fn;
  };
}

const calc = new Calculator();
calc.addMethod('*', (a, b) => a * b);
// console.log(calc);
// console.log(calc.calculate('3 / 4'));
// console.log(calc.calculate('3 * 4'));

// Write function which shuflle array's elements:__________________________
let array = [1, 2, 3];
let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

const shuflle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

for (let i = 0; i < 10000; i++) {
  shuflle(array);
  count[array.join('')]++;
}

// console.log(count);

console.log(null == undefined);
