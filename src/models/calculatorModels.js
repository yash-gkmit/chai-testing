let result = 0;

function add(a, b) {
    result = a + b;
    return result;
}

function subtract(a, b) {
    result = a - b;
    return result;
}

function multiply(a, b) {
    result = a * b;
    return result;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    result = a / b;
    return result;
}

function outputResult() {
    return result;
}

module.exports = { add, subtract, multiply, divide, outputResult };