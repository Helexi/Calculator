const calcScreen = document.querySelector('.calc-screen');
const ac = document.querySelector('.ac');
const buttons = document.querySelector('.buttons');

let a = '' // первое число
let b = '' // второе число
let sing = '' // знак вычисления 
let finich = false;

let namber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
let action = ['-', '+', 'x', '/'];
let namberOur = []; //
let sum = 0; //

function clearAll() {
    a = '' // первое число
    b = '' // второе число
    sing = '' // знак вычисления 
    finich = false;
    calcScreen.textContent = 0;
}


function Nabor(event) {

    //нажата не кропка
    if (!event.target.classList.contains('btn')) {
        return;
    }
    // нажата кнопка ac
    if (event.target.classList.contains('ac')) {
        calcScreen.textContent = "";
        return;
    }
    // получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата клавиша 0-9 или .

    if (namber.includes(key)) {
        if (b === '' && sing === "") {
            a += key;
            console.log(a, b, sing);
            calcScreen.textContent = a;
            namberOur.push(+a); //
            console.log(namberOur);
        } else if (a !== "" && b !== "" && finich) {
            b = key;
            finich = false;
            calcScreen.textContent = b;
        } else {
            b += key;
            calcScreen.textContent = b;
        }

        return;
    }

    //если нажата клавиша + - / *

    if (action.includes(key)) {
        sing = key;
        calcScreen.textContent = sing;
        namberOur.push(+b); //
        namberOur.forEach((item) => sum += item); //
        console.log(namberOur); //
        console.log(sum); //
        return;

    };

    //если нажата клавиша =

    if (key === '=') {
        if (b === "") {
            b = a;
        }
        switch (sing) {
            case "+":
                a = (+a) + (+b);
                b = +b;
                break;
            case '-':
                a = a - b;
                break;
            case 'x':
                a = a * b;
                break;
            case '/':
                if (b === '0') {
                    calcScreen.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = a / b;
                break;
        }
    }

    finich = true;
    calcScreen.textContent = a;
    console.log(a, b, sing);
}

console.log('123');

ac.addEventListener('click', clearAll);
buttons.addEventListener('click', Nabor);