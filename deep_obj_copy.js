/// DEEP OBJECT COP: recursive!

const objForCopy = {
  a: 5,
  b: { g: 8, y: 9, t: { q: [48, 47] } },
  x: 47,
  l: {
    f: 85,
    p: { u: 89, d: new Date('2022-02-24').toLocaleDateString() },
    s: 71,
  },
  r: { h: 9, a: 'test', s: 'test2' },
};

// option 1:
function deepObjCopy(obj) {
  const newObj = {};
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      newObj[key] = [...obj[key]];
    } else if (key instanceof Object) {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
// option 2:
function deepClone(obj) {
  const keysArr = Object.keys(obj);
  return keysArr.reduce((clone, key) => {
    if (Array.isArray(obj[key])) {
      clone[key] = [...obj[key]];
    } else if (obj[key] instanceof Date) {
      clone[key] = new Date(obj[key]);
    } else if (obj[key] instanceof Object) {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
    return clone;
  }, {});
}

//Option 3 with Deskriptor:
function clone(target, obj) {
  for (let key in obj) {
    let descriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (descriptor.value instanceof String) {
      target[key] = new String(descriptor.value);
    } else if (descriptor.value instanceof Array) {
      target[key] = clone([], descriptor.value);
    } else if (descriptor.value instanceof Date) {
      console.log('date', descriptor.value);
      target[key] = new Date(descriptor.value);
    } else if (descriptor.value instanceof Object) {
      let prototype = Object.getPrototypeOf(descriptor.value);
      let objCopy = clone({}, descriptor.value);
      Object.setPrototypeOf(objCopy, prototype);
      target[key] = objCopy;
    } else {
      Object.defineProperty(target, key, descriptor);
    }
  }
  let prototype = Object.getPrototypeOf(obj);
  Object.setPrototypeOf(target, prototype);
  return target;
}

// option 4 Browser API:
const apiClone = structuredClone(objForCopy);
//results:
const copy1 = deepObjCopy(objForCopy);
const copy2 = deepClone(objForCopy);
const copy3 = clone({}, objForCopy);

console.log('original', objForCopy);
console.log('c1', copy1);
console.log('c2', copy2);
console.log('c3', copy3);
