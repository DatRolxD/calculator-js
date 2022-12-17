// Calculator
// Takes a number
// Takes an operator
// Displays a result
//const one = document.querySelector('#n1');

let numButtons = document.querySelectorAll('button.num');
numButtons = [...numButtons];
let opButtons = document.querySelectorAll('button.operator');
opButtons = [...opButtons];
const input = document.querySelector('#input-and-result');
const memory = document.querySelector('#memory');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
input.textContent = '';
memory.textContent = '';

// Take a number and display it on INPUT
numButtons.map(button => {
  button.addEventListener('click', () => {
    if (input.textContent !== '0'){
      input.textContent += button.textContent;
    }
    else {
      input.textContent = button.textContent;
    }
  });
});

opButtons.map(button => {
  button.addEventListener('click', () => {
    memory.textContent += `${input.textContent} ${button.textContent}`; 
    input.textContent = 0;
  });
});

clear.addEventListener('click', () => {
  input.textContent = '';
});

del.addEventListener('click', () => {
  input.textContent = '';
  memory.textContent = '';
});

