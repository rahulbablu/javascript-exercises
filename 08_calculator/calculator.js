const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let sum = 0;
	for(let i=0; i< arr.length; i++){
     sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let sum = 1;
	for(let i=0; i< arr.length; i++){
      sum *= arr[i];
  }
  return sum;
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(num) {
	if(num < 0){
    return -1;
  }else if(num == 0 || num == 1){
    return 1;
  }else if(num > 1){
      let result = 1
      for(let i = num; i >1; i--){
        result = result * i;
      }
      return result;
  }
};

add(0,0);
add(2,2);
add(2,6);

subtract(10,4);

sum([]);
sum([7]);
sum([7, 11]);
sum([1,3,5,7,9]);

multiply([2,4]);
multiply([2,4,6,8,10,12,14]);

power(4,3);

factorial(0);
factorial(1);
factorial(2);
factorial(5);
factorial(10);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}