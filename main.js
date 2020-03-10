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

// FUNCIONES

function getInputNumber() {
  const inputContent = document.querySelector('.js-number');
  console.log(inputContent.value);
}

function compareNumber() {}

button.addEventListener('click', getInputNumber);
