let currentInput = "";
let operator = "";
let previousInput = "";

function display(value) {
    currentInput += value;
    document.getElementById('resultado').value = currentInput;
}

function clearScreen() {
    currentInput = "";
    operator = "";
    previousInput = "";
    document.getElementById('resultado').value = "";
}

function calculate(op) {
    if (op === '=') {
        currentInput = eval(previousInput + operator + currentInput);
        document.getElementById('resultado').value = currentInput;
        previousInput = "";
        operator = "";
    } else {
        operator = op;
        previousInput = currentInput;
        currentInput = "";
        document.getElementById('resultado').value = "";
    }
}