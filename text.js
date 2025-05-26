let opr = "";
let num1 = "";
let num2 = "";

const add = function(a, b) {
	let sum = +a + +b;
    currentInp.textContent = sum;
    num1 = sum;
    num2 = "";
}

const subtract = function(a, b) {
  let sub = a - b
    currentInp.textContent = sub;
    num1 = sub;
    num2 = "";
}

const multiply = function(a, b) {
    currentInp.textContent = (a * b);
    num1 = (a * b);
    num2 = "";
};

const divide = function(a, b) {
    currentInp.textContent = (a / b);
    num1 = (a / b);
    num2 = "";
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
let lastInp = document.querySelector(".input-last")

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
    if (opr === "") {
    opr = operator.textContent;
    lastInp.textContent += `${num1} ${opr} `;
    currentInp.textContent = "";
    } else {
      operate(num1, opr, num2);
      opr = operator.textContent;
      if (opr === "=") {
      lastInp.textContent = "";
      opr = "";
      } else {
        lastInp.textContent = `${num1} ${opr}`;
        currentInp.textContent = "";
      }
    }
  });
});


// clear all button clears the whole calculator
let clearAll = document.querySelector(".clear-all");

clearAll.addEventListener("click", function() {
  num1 = "";
  num2 = "";
  opr = "";
  currentInp.textContent = "";
  lastInp.textContent = "";
})

