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
    sum: a+b,
    mul: a*b,
    dif: a-b,
    div: a/b,
  };

  if(oper in operations) {
    return operations[oper];
  } else {
    return 'unknown operation';
  }
};

function argumentsForCalc() {}

let btnEqual = document.getElementById('equal');
btnEqual.onclick = function () {
  let result = document.getElementById('row');
  result = result.textContent.split('')
  
}


let btnClear = document.getElementById('clear');
btnClear.onclick = function () { 
  let clear = document.getElementById('row');
  clear.innerHTML = '';
 };

let btnErase = document.getElementById('erase');
btnErase.onclick = function () {
  let number = document.getElementById('row');
  number.innerHTML = number.innerHTML.slice(0, -1);
}

let btnPlus = document.getElementById('plus');
btnPlus.onclick = function () { 
  let buttonPlus = document.getElementById('row')
  buttonPlus.innerHTML = buttonPlus.innerHTML + '+';
 }

let btnMinus = document.getElementById('minus');
btnMinus.onclick = function () {
  let buttonMinus = document.getElementById('row')
  buttonMinus.innerHTML = buttonMinus.innerHTML + '-';
}

let btnMulty = document.getElementById('multiplay');
btnMulty.onclick = function () {
  let buttonMulty = document.getElementById('row')
  buttonMulty.innerHTML = buttonMulty.innerHTML + '*';
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

let btnOne = document.getElementById('one');
btnOne.onclick = function () { 
  let number = document.getElementById('row');
  if(number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 1;
  }
 };

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
};

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



