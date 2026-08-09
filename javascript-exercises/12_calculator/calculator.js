const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total,val) => total + val, 0);
};

const multiply = function(arr) {
  return arr.reduce((total,val => total * val,1));
};

const power = function(base , expo) {
	return base**expo;
};

const factorial = function(num) {
	let x = num;
  let fact = 1;
  while(x > 1){
    fact *= x;
    x--;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
