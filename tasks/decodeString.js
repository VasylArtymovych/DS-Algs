/**Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square 
brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, 
square brackets are well-formed, etc. Furthermore, you may assume that the original data does not 
contain any digits and that digits are only for those repeat numbers, k. 
For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input: s = "3[a]2[bc]"
Output: "aaabcbc"

Example 2:
Input: s = "3[a2[c]]"
Output: "accaccacc"

Example 3:
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"

Constraints:

1 <= s.length <= 30
s consists of lowercase English letters, digits, and square brackets '[]'.
s is guaranteed to be a valid input.
All the integers in s are in the range [1, 300]. */

//* Time: O(n*k) k - кількість повторень символів, які треба розмножити.
//* Memory: O(n), в гіршому випадку прийдеться додати в стеки усі елементи.
const decodeString = (str) => {
  const num = /^[0-9]+$/;

  let result = '';
  let repeatNum = '';
  let stackNum = [];
  let stackChar = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (num.test(char)) {
      repeatNum += char;
    } else if (char === '[') {
      stackNum.push(Number(repeatNum));
      stackChar.push(result);
      repeatNum = '';
      result = '';
    } else if (char === ']') {
      let numOfRepeating = stackNum.pop();
      let temp = stackChar.pop();
      while (numOfRepeating) {
        temp += result;
        numOfRepeating -= 1;
      }
      result = temp;
    } else {
      result += char;
    }
  }

  return result;
};

// console.log(decodeString('3[a]2[bc]')); // "aaabcbc"
// console.log(decodeString('3[a2[c]]')); // "accaccacc"
// console.log(decodeString('2[abc]3[cd]ef')); // "abcabccdcdcdef"
// console.log(decodeString('ro2[bot]dr4[e]ams')); // "robotbotdreeeeams"
// console.log(decodeString('qwe2[asd3[w2[e]]]')); // "qweasdweeweeweeasdweeweewee"
// console.log(decodeString('100[leetcode]')); //

const decodeStrRec = (str, num = 1) => {
  const letters = /^[a-z]+$/;
  const numValid = /^[0-9]+$/;

  let res = '';

  if (letters.test(str)) {
    while (num) {
      res += str;
      num -= 1;
    }
    return res;
  }

  let repeatNum = '';
  let stackNum = [];
  let stackChar = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (numValid.test(char)) {
      repeatNum += char;
    } else if (char === '[') {
      stackNum.push(Number(repeatNum));
      stackChar.push(res);
      repeatNum = '';
      res = '';
    } else if (char === ']') {
      let num = stackNum.pop();
      res = stackChar.pop() + decodeStrRec(res, num);
    } else {
      res += char;
    }
  }

  return res;
};

// console.log(decodeStrRec('3[a]2[bc]')); // "aaabcbc"
// console.log(decodeStrRec('3[a2[c]]')); // "accaccacc"
// console.log(decodeStrRec('2[abc]3[cd]ef')); // "abcabccdcdcdef"
// console.log(decodeStrRec('ro2[bot]dr4[e]ams')); // "robotbotdreeeeams"
// console.log(decodeStrRec('qwe2[asd3[w2[e]]]')); // "qweasdweeweeweeasdweeweewee"
// console.log(decodeStrRec('100[leetcode]')); //

//todo Recursieve optimized:
// Time: O(n), it is linear despite different cases that might be in there
// (e.g. a lot of repeats going deeper and deeper)
// but in the end, we go over input only once
const solve = (s) => {
  const { result } = decodeStringRecursive(s, 0);
  return result;
};

const decodeStringRecursive = (s, idx) => {
  // we pass string itself, and index where we are currently
  let resultStr = '';
  let num = 0; // multiplier

  // check if string has not finished yet
  while (idx < s.length) {
    const c = s[idx];
    if (isDigit(c)) {
      // if it is number -- it is multiplier of next group
      // might consist of more than 1 digit, hence to formula
      num = num * 10 + Number(c);
      idx++; // move idx manually
    } else if (c === '[') {
      // new inner group starts, it is time to recurse
      // we will get result as 2 pieces: [string, index]
      const { result, index } = decodeStringRecursive(s, idx + 1);

      // the result of inner group should be repeated num times
      resultStr += result.repeat(num);
      num = 0;

      // move index to the new position we got from recursive calls
      idx = index;
    } else if (c === ']') {
      // end of group, we should break the loop and form the final string to return
      break;
    } else {
      // regular char -- just add to string
      resultStr += c;
      // and move index manually
      idx++;
    }
  }

  // we return [string, int] as the:
  // 1. result string (from inner process)
  // 2. index where we finished to proceed from next char
  return { result: resultStr, index: idx + 1 };
};

const isDigit = (c) => {
  return c >= '0' && c <= '9';
};

console.log(solve('3[a]2[bc]')); // "aaabcbc"
console.log(solve('3[a2[c]]')); // "accaccacc"
console.log(solve('2[abc]3[cd]ef')); // "abcabccdcdcdef"
console.log(solve('ro2[bot]dr4[e]ams')); // "robotbotdreeeeams"
console.log(solve('qwe2[asd3[w2[e]]]')); // "qweasdweeweeweeasdweeweewee"
console.log(solve('100[leetcode]')); //
