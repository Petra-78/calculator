let opr = "";
let num1 = "";
let num2 = "";

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

let currentInp = document.querySelector(".input-current");
let numbers = document.querySelectorAll(".number");

numbers.forEach(function(number){
  number.addEventListener("click", () => {
    const digit = number.textContent;
    if (opr === "") {
      num1 += digit;
      currentInp.textContent += `${digit}`;
    } else {
      num2 += digit;
      currentInp.textContent += `${digit}`;
    }
  });
});

let operators = document.querySelectorAll(".operator");
operators.forEach(function(operator) {
  operator.addEventListener("click", () => {
    opr = operator.textContent;
    currentInp.textContent += ` ${opr} `;
  });
});




// document.querySelector(".input-current").textContent = `${num1} ${opr} ${num2}`
