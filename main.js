import { clearNumbers } from './view.js';
import { eraseNumbers } from './view.js';
import { btnPlus } from './view.js';
import { btnMinus } from './view.js';
import { btnMulty } from './view.js';
import { btnDiv } from './view.js';
import { btnZero } from './view.js';
import { btnOne } from './view.js';
import { btnTwo } from './view.js';
import { btnThree } from './view.js';
import { btnFour } from './view.js';
import { btnFive } from './view.js';
import { btnSix } from './view.js';
import { btnSeven } from './view.js';
import { btnEight } from './view.js';
import { btnNine } from './view.js';

function Calc(operator, a, b) {
  switch (undefined) {
    case operator:
    case a:
    case b:
      alert('Error');
      break;
  };

  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Error';
  };

  const operations = {
    sum: a + b,
    mul: a * b,
    dif: a - b,
    div: a / b,
  };

  if (operator in operations) {
    return operations[operator];
  } else {
    return 'unknown operation';
  }
};

// КНОПКА РЕЗУЛЬТАТА
function equalBtn() {
  let arr = row.textContent;
  let operator;
  let a;
  let b;
  let result;

  for (let key of arr) {
    if (key === "+") {
      operator = "+"
    }
    else if (key === "-") {
      operator = "-"
    }
    
    else if (key === "×") {
      operator = "×"
    }
    else if (key === "/") {
      operator = "/"
    }
  }
  arr = arr.split(operator)
  a = +(arr.slice([0], [1]))
  b = +(arr.slice([1]))

  const operationsUi = {
    "+": "sum",
    "-": "dif",
    "×": "mul",
    "/": "div",
  }

  operator = operationsUi[operator]
  result = Calc(operator, a, b)
  row.textContent = result;  

} equal.addEventListener("click", equalBtn)

// ВЫЗОВ ВСЕХ КНОПОК
erase.addEventListener("click", eraseNumbers);
clear.addEventListener("click", clearNumbers);
plus.addEventListener("click", btnPlus);
minus.addEventListener("click", btnMinus);
multiplay.addEventListener("click", btnMulty);
divide.addEventListener("click", btnDiv);
zero.addEventListener("click", btnZero);
one.addEventListener("click", btnOne);
two.addEventListener("click", btnTwo);
three.addEventListener("click", btnThree);
four.addEventListener("click", btnFour);
five.addEventListener("click", btnFive);
six.addEventListener("click", btnSix);
seven.addEventListener("click", btnSeven);
eight.addEventListener("click", btnEight);
nine.addEventListener("click", btnNine);