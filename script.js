let curResult = 0;
let curNumInput = '';
let curOperator = '+';

function addInput(input) {
    let formula = document.querySelector('#display');
    curNumInput += input;
    formula.innerHTML = curNumInput;
}

function changeOperator(operator) {
    document.querySelector('#display').innerHTML = '';
    evaluateFormula();
    curNumInput = '';
    curOperator = operator;
}

function clearFormula() {
    curResult = 0;
    curNumInput = '';
    curOperator = '+';
    document.querySelector('#display').innerText = '';
    document.querySelector('#display').innerText = '';
}

function backspace() {
    if (curNumInput !== '') {
        curNumInput = curNumInput.slice(0, -1);
        document.querySelector('#display').innerHTML = curNumInput;
    }
}

function evaluateFormula() {
    if (curNumInput === "") return;
    let parsedInput = parseInt(curNumInput);

    if (Number.isNaN(parsedInput)) {
        alert('Error: Invalid input');
        return;
    }

    switch (curOperator) {
        case '+':
            curResult += parsedInput;
            break;
        case '-':
            curResult -= parsedInput;
            break;
        case '/':
            if (parsedInput === 0) {
                alert('Error: Division by zero!');
                return;
            }
            curResult /= parsedInput;
            break;
        case '*':
            curResult *= parsedInput;
            break;
        default:
            break;
    }

    document.querySelector('#display').innerHTML = curResult;
    curNumInput = '';
}

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    let buttonLabel = button.children[0].innerText;
    if (buttonLabel === 'C') {
        button.addEventListener('click', clearFormula);
    } else if (buttonLabel === 'B') {
        button.addEventListener('click', backspace);
    } else if (buttonLabel === '=') {
        button.addEventListener('click', evaluateFormula);
    } else if (buttonLabel.search(/[*\/\-+]/) !== -1) {
        button.addEventListener('click', () => changeOperator(buttonLabel));
    }
    else {
        button.addEventListener('click', () => addInput(buttonLabel));
    }
});
