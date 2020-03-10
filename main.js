'user strict';

// Generar número aleatorio
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//  Recoger￼ valores

const button = document.querySelector('.js-button');

const inputNumber = document.querySelector('.js-number');

const clue = document.querySelector('.js-clue');

const intents = document.querySelector('.js-intents');

// FUNCIONES

function getInputNumber() {
  const inputContent = inputNumber.value;
  compareNumber();
  calculateNumberofClicks();
}

function compareNumber() {
  if (randomNumber === parseInt(inputNumber.value)) {
    clue.value = 'Has ganado campeona';
  } else if (randomNumber < parseInt(inputNumber.value) && parseInt(inputNumber.value) < 100) {
    clue.value = 'Demasido alto';
  } else if (randomNumber > parseInt(inputNumber.value) && parseInt(inputNumber.value) > 1) {
    clue.value = 'Demasido bajo';
  } else if (parseInt(inputNumber.value) > 100 || parseInt(inputNumber.value) < 1) {
    clue.value = 'El número debe estar entre 0 y 100';
  }
}

let sum = 0;

function calculateNumberofClicks() {
  sum = sum + 1;
  intents.value = sum;
}
console.log(calculateNumberofClicks());

button.addEventListener('click', getInputNumber);
