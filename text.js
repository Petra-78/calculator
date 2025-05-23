let opr = "";
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

const multiply = function(a, b) {
  console.log (a * b);
};

const divide = function(a, b) {
  console.log(a / b);
}

function operate(num1, operator, num2) {
  opr = operator;
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "x") {
    multiply(num1, num2)
  } else if (operator === "/") {
    divide(num1, num2);
  }
}
