let operator = "";
let num1 = 0;
let num2 = 0;

const add = function(a, b) {
	let sum = a + b;
    console.log(sum);
  
  }

const subtract = function(num1, ...nums) {
  let sub = num1;
  for (const num of nums) {
    sub -= num;
  }
  console.log (sub);
  }


const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(a, b) {
  console.log (a * b);
};
