/**
 * Currying is a transformation of functions that translates a function
 * from callable as f(a, b, c) into callable as f(a)(b)(c).
 */

//Simple:
function currySimple(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

const carreidSum = currySimple(sum);
// console.log(curreidSum(2)(3)); // 5
// console.log(curreidSum(3)(4)); // 5

// Advanced: where is possible call func with all args or as carrying with single one:
function curry(func) {
  return function carried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return carried.apply(this, args.concat(args2));
      };
    }
  };
}

function mult(a, b, c) {
  return a * b * c;
}

const curriedMult = curry(mult);
console.log(curriedMult(1, 2, 3));
console.log(curriedMult(1)(2)(3));

const currWithFixFirstArg = curriedMult(3);
console.log(currWithFixFirstArg(3)(3));
