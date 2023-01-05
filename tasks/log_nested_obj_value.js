const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 3, children: [{ value: 4, children: [{}] }] }],
    },
    { value: 5, children: [{ value: 7, children: [] }] },
  ],
};

// Recursive option:
let count = 0; //! 12 iterations
const logTreeValues = (obj) => {
  let res = [];
  for (let key in obj) {
    count += 1;
    if (Array.isArray(obj[key])) {
      obj[key].forEach((obj) => {
        res = res.concat(logTreeValues(obj));
      });
    } else {
      res.push(obj[key]);
    }
  }
  return res;
};

console.log('Option1', logTreeValues(tree), 'count', count);

// Using DS - Stack option:
let count2 = 0; //! 13 iterations
const logTreeValues2 = (obj) => {
  let stack = [obj];
  let res = [];

  while (stack.length > 0) {
    count2 += 1;
    let node = stack.shift();
    for (let key of Object.keys(node)) {
      if (key === 'value') {
        res.push(node[key]);
      } else {
        stack.push(node[key]);
      }
    }
  }

  return res;
};
console.log('Option2', logTreeValues2(tree), 'count2', count2);

// option DS - Stack optimized:
let count3 = 0; //! 7 iterations
const logTreeValues3 = (obj) => {
  let stack = [obj];
  let res = [];

  while (stack.length > 0) {
    count3 += 1;
    let node = stack.shift();
    if (node.value !== undefined) {
      res.push(node.value);
    }
    if (node.children?.length > 0) {
      stack.push(...node.children);
    }
  }

  return res;
};

console.log('Option3', logTreeValues3(tree), 'count3', count3);
