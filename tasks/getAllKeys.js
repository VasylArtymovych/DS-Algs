const input = {
  a: {
    b: 2,
    q: [0, 3, 4],
  },
  x: true,
  d: { f: null },
};

function getKeysArray(obj) {
  function* keysOf(obj) {
    for (const parent in obj) {
      const children = getKeysArray(obj[parent]);
      if (children.length > 0) {
        for (const child of children) {
          yield `${parent}.${child}`;
        }
      } else {
        yield parent;
      }
    }
  }

  return [...keysOf(obj)];
}
console.log(getKeysArray(input)); // ["a.b", "a.q.0", "a.q.1", "a.q.2", "x", "d.f"]  ==========================
//===================================================================================
