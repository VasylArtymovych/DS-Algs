//todo Bind implementation:
Function.prototype.myBind = function (context, ...bindArgs) {
  let fn = this;
  return function (...args) {
    fn.apply(context, [...bindArgs, ...args]);
  };
};

// Object to bind:
const user = {
  name: 'Bob',
  surname: 'Bishap',
};

const printInfo = function (address, country) {
  console.log(
    `I am ${this.name} ${this.surname} living on address: ${address}, country: ${country}`
  );
};

const bindPrintInfo = printInfo.bind(user);
const myBindPrintInfo = printInfo.myBind(user, 'Kyiv');

//* Result:
bindPrintInfo('Lviv ', 'Ukraine'); // I am Bob Bishap living on address: Lviv , country: Ukraine
myBindPrintInfo('Ukraine'); // I am Bob Bishap living on address: Kyiv, country: Ukraine
