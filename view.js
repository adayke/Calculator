// КНОПКИ: С, BACKSPACE
export function clearNumbers() {
  let clearRow = document.getElementById('row');
  clearRow.innerHTML = '';
} 
export function eraseNumbers() {
  let eraseRow = document.getElementById('row');
  eraseRow.innerHTML = eraseRow.innerHTML.slice(0, -1);
} 

 //КНОПКИ ОПЕРАТОРОВ 
export function btnPlus() {
  let buttonPlus = document.getElementById('row');
  buttonPlus.textContent = buttonPlus.textContent + '+';
} 
export function btnMinus() {
  let buttonMinus = document.getElementById('row')
  buttonMinus.innerHTML = buttonMinus.innerHTML + '-';
}
export function btnMulty() {
  let buttonMulty = document.getElementById('row')
  buttonMulty.innerHTML = buttonMulty.innerHTML + '×';
} 
export function btnDiv() {
  let buttonDiv = document.getElementById('row')
  buttonDiv.innerHTML = buttonDiv.innerHTML + '/';
} 

// КНОПКИ ЦИФР
export function btnZero() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 0;
  }
}
export function btnOne() {
  let numbersRow = document.getElementById('row');
  if (numbersRow.textContent.length < 6) {
    numbersRow.textContent = numbersRow.textContent + 1;
  }
} 
export function btnTwo() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 2;
  }
}
export function btnThree() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 3;
  }
} 
export function btnFour() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 4;
  }
}
export function btnFive() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 5;
  }
}
export function btnSix() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 6;
  }
}
export function btnSeven() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 7;
  }
}
export function btnEight() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 8;
  }
}
export function btnNine() {
  let number = document.getElementById('row');
  if (number.innerHTML.length < 6) {
    number.innerHTML = number.innerHTML + 9;
  }
}