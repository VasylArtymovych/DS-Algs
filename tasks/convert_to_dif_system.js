// convert number to hex:
const toHex = (num) => {
  return num.toString(16);
};
let str1 = toHex(1);
let str2 = toHex(255);
console.log(str1);
console.log(str2);

// convert from hex to decimal
const fromHexToDecimal = (str) => {
  return parseInt(str, 16);
};

let res1 = fromHexToDecimal(str1);
let res2 = fromHexToDecimal(str2);
console.log(res1);
console.log(res2);
