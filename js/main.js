const calcScreen = document.querySelector('.calc-screen');
const ac = document.querySelector('.ac');
const buttons  = document.querySelector('.buttons');

let a = '' // первое число
let b = '' // второе число
let sing = '' // знак вычисления 
let finich = false;

let namber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let action = ['-', '+', 'x', '/']

function clearAll () {
    a = '' // первое число
    b = '' // второе число
    sing = '' // знак вычисления 
    finich = false;
    calcScreen.textContent = 0;
    console.log(1);
}

function Nabor () {
    console.dir(buttons);
}

ac.addEventListener('click', clearAll);
buttons.addEventListener('click', Nabor);
