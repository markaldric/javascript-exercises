const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
  return arr.reduce((total, ar) => total + ar,0);
};

const multiply = function (array) {
  return array.length
    ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};
const power = function(num1,num2) {
	let total = num1;
  for (x=1;x<num2;x++) {
    total = total*num1;
  }
  return total;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

console.log(factorial(5))
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
