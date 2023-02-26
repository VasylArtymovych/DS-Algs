/**
 * Given a positive number n > 1 find the prime factor decomposition of n.
 * The result will be a string with the following form : "(p1**n1)(p2**n2)...(pk**nk)";
 * Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
 */

function primeFactors(n) {
  for (var i = 2, res = '', f; i <= n; i++) {
    f = 0;
    while (n % i == 0) {
      f++;
      n /= i;
    }
    res += f ? '(' + (f > 1 ? i + '**' + f : i) + ')' : '';
  }
  return res || '(' + n + ')';
}

const primeFactors2 = (n) => {
  if (n < 2) return `(${n})`;

  let factors = '';

  for (let i = 2; i <= n; i++) {
    let count = 0;
    while (n % i === 0) {
      count++;
      n /= i;
    }
    if (count) {
      factors += `(${i}`;
      if (count > 1) factors += `**${count}`;
      factors += `)`;
    }
  }
  return factors;
};

function primeFactors3(remainder) {
  var factors = [],
    i;

  for (i = 2; i <= remainder; i++) {
    while (remainder % i === 0) {
      factors.push(i);
      remainder /= i;
    }
  }

  return [...new Set(factors)]
    .map((v) => {
      let num = factors.filter((e) => e === v).length;
      if (num > 1) {
        return `(${v}**${num})`;
      }

      return `(${v})`;
    })
    .join('');
}
