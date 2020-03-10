'user strict';

// Generar número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//  Recoger￼ valores

const button = document.querySelector('.js-button');
console.log(button);

const inputNumber = document.querySelector('.js-number');

const clue = document.querySelector('.js-clue');

// FUNCIONES

function getInputNumber() {
  const inputContent = inputNumber.value;
  console.log(inputContent);
  compareNumber();
}

function compareNumber() {
  debugger;
  if (randomNumber === parseInt(inputNumber.value)) {
    clue.value = 'Has ganado campeona';
  } else if (randomNumber < parseInt(inputNumber.value) && parseInt(inputNumber.value) < 100) {
    clue.value = 'Demasido alto';
  } else if (randomNumber > parseInt(inputNumber.value)) {
    clue.value = 'Demasido bajo';
  } else if (parseInt(inputNumber.value) > 100 && parseInt(inputNumber.value) < 1) {
    clue.value = 'El número debe estar entre 0 y 100';
  }
}

button.addEventListener('click', getInputNumber);
