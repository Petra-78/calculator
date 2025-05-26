let opr = "";
let num1 = "";
let num2 = "";
let dec = "";

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

const decimal = document.querySelector(".decimal");
decimal.addEventListener ("click", () => {
  if (dec === ".") {
    alert("you cant decimate a number twice");
  } else if (currentInp.textContent === "") {
    alert("type a number first");
  } else {
    dec = decimal.textContent;
    currentInp.textContent += dec;
  }

})


// displays the numbers in the input field on click
numbers.forEach(function(number){
  number.addEventListener("click", () => {
    const digit = number.textContent;
    if (opr === "") {
      currentInp.textContent += `${digit}`;
      num1 = currentInp.textContent;
    } else {
      currentInp.textContent += `${digit}`;
      num2 = currentInp.textContent;
    }
  });
});

let operators = document.querySelectorAll(".operator");

//displays clicked operator in the input field 
operators.forEach(function(operator) {
  operator.addEventListener("click", () => {
    dec = "";
    if (opr === "") {
    opr = operator.textContent;
    lastInp.textContent += `${num1}${opr}`;
    currentInp.textContent = "";
   // makes an operation if opr variable is already declared once
    } else {
      operate(num1, opr, num2);
      opr = operator.textContent;

      // changes input field depending on whether a = operation was used or not
      if (opr === "=") {
      lastInp.textContent = "";
      opr = "";
      } else {
        lastInp.textContent = `${num1}${opr}`;
        currentInp.textContent = "";
      }
    }
  });
});

//clear the whole calculator
let clearAll = document.querySelector(".clear-all");

clearAll.addEventListener("click", function() {
  num1 = "";
  num2 = "";
  opr = "";
  currentInp.textContent = "";
  lastInp.textContent = "";
  dec = "";
});

const deleteBtn = document.querySelector(".delete");

// deletes last character
deleteBtn.addEventListener("click", () => {
  if (currentInp.textContent === "") {
    currentInp.textContent = lastInp.textContent;
    lastInp.textContent = "";

    let delLast = currentInp.textContent.split("");
    delLast.pop();
    currentInp.textContent = delLast.join("");
    num1 = delLast.join("");
    opr = "";
  } else {
    let delCurrent = currentInp.textContent.split("");
    delCurrent.pop();
    currentInp.textContent = delCurrent.join("");
    if (lastInp.textContent === "") num1 = delCurrent.join("");
      else num2 = delCurrent.join("");
  }
})



