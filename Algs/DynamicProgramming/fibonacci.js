//todo: Implementation of Nth Fibbonacci using: Bottom-UP Approach.
// Time: O(N); Space: O(1);
function fibonacci(n) {
  let fb = [];

  fb[0] = 0;
  fb[1] = 1;

  for (let i = 2; i <= n; i++) {
    fb[i] = fb[i - 1] + fb[i - 2];
  }

  return fb[n];
}

console.log(fibonacci(8));
console.log(fibonacci(6));

//todo: Implementatiom of Nth Fibonacci: Up-Down Approach with Memoization.
// Time: O(N); Space: O(1)
function fibonacciMemo(n) {
  var result = new Array(n + 1).fill(-1);

  // Check if n is in result:
  if (result[n] === -1) {
    if (n <= 1) {
      result[n] = n;
    } else {
      result[n] = fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
    }
  }

  return result[n];
}
console.log(fibonacciMemo(8));
console.log(fibonacciMemo(6));
