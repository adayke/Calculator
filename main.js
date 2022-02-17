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


// КНОПКИ: С, BACKSPACE
function clearNumbers() { 
  let clearRow = document.getElementById('row');
  clearRow.innerHTML = '';
 } clear.addEventListener("click", clearNumbers);

function eraseNumbers() { 
  let eraseRow = document.getElementById('row');
  eraseRow.innerHTML = eraseRow.innerHTML.slice(0, -1);
 } erase.addEventListener("click", eraseNumbers);

 //КНОПКИ ОПЕРАТОРОВ 
function btnPlus() { 
  let buttonPlus = document.getElementById('row');
  buttonPlus.textContent = buttonPlus.textContent + '+';
} plus.addEventListener("click", btnPlus)

let btnMinus = document.getElementById('minus');
btnMinus.onclick = function () {
  let buttonMinus = document.getElementById('row')
  buttonMinus.innerHTML = buttonMinus.innerHTML + '-';
}

let btnMulty = document.getElementById('multiplay');
btnMulty.onclick = function () {
  let buttonMulty = document.getElementById('row')
  buttonMulty.innerHTML = buttonMulty.innerHTML + '×';
}

let btnDiv = document.getElementById('divide');
btnDiv.onclick = function () {
  let buttonDiv = document.getElementById('row')
  buttonDiv.innerHTML = buttonDiv.innerHTML + '/';
}

// КНОПКИ ЦИФР
let btnZero = document.getElementById('zero');
btnZero.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 0;
  } 
};

function btnOne() {
  let numbersRow = document.getElementById('row');
  if (numbersRow.textContent.length < 6) {
    numbersRow.textContent = numbersRow.textContent + 1;
  }
} one.addEventListener("click", btnOne);

let btnTwo = document.getElementById('two');
btnTwo.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 2;
  }
};

let btnThree = document.getElementById('three');
btnThree.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 3;
  }
}

let btnFour = document.getElementById('four');
btnFour.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 4;
  }
};

let btnFive = document.getElementById('five');
btnFive.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 5;
  }
};

let btnSix = document.getElementById('six');
btnSix.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 6;
  }
};

let btnSeven = document.getElementById('seven');
btnSeven.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 7;
  }
};

let btnEight = document.getElementById('eight');
btnEight.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 8;
  }
};

let btnNine = document.getElementById('nine');
btnNine.onclick = function () {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 9;
  }
};