let arr = [];

function equalResult() { 
  let oper;
  let operator;

  let resultRow = document.getElementById('row');
  arr = resultRow.textContent.split('');

  for(let key of arr){
    if (key === '+' || key === '-' || key === '/' || key === '×'){
      oper = key;
    }
  }
  let arrNumbers = arr.split(oper);
  a = +(arrNumbers[0]);
  b = +(arrNumbers[1]);

  switch(oper) {
    case '+':
      operator = 'sum';
      break;
  }
  arr = Calc(oper, a, b)

  console.log(oper);

 } equal.addEventListener("click", equalResult);

function Calc(oper, a, b) {
  switch (undefined) {
    case oper:
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

  if (oper in operations) {
    return operations[oper];
  } else {
    return 'unknown operation';
  }
};

function clearNumbers() { 
  let clearRow = document.getElementById('row');
  clearRow.innerHTML = '';
 } clear.addEventListener("click", clearNumbers);

function eraseNumbers() { 
  let eraseRow = document.getElementById('row');
  eraseRow.innerHTML = eraseRow.innerHTML.slice(0, -1);
 } erase.addEventListener("click", eraseNumbers);

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



