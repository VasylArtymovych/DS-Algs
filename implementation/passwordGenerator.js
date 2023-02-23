function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function* generatePasswordCodes() {
  //! Директива yield* делегує виконання іншому генератору.
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);
}

let str = '';

for (const code of generatePasswordCodes()) {
  str += String.fromCodePoint(code);
}

console.log(str); // 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

//todo generate random value based on seed:
function* pseudoRandom(seed) {
  let value = seed;
  while (true) {
    yield (value = (value * 16807) % 2147483647);
  }
}

let gen = pseudoRandom(1);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
