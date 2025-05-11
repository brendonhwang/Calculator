function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return 'NOPE';
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (isNaN(a) || isNaN(b)) return '';

  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return '';
  }
}

let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      clear();
    } else if (value === '←') {
      backspace();
    } else if (value === '=') {
      evaluate();
    } else if (['+', '-', '*', '/'].includes(value)) {
      setOperator(value);
    } else if (value) {
      appendNumber(value);
    }
  });
});

function appendNumber(value) {
  if (shouldResetDisplay) {
    display.textContent = '';
    shouldResetDisplay = false;
  }

  if (value === '.' && display.textContent.includes('.')) return;

  if (display.textContent === '0' && value !== '.') {
    display.textContent = value;
  } else {
    display.textContent += value;
  }

  if (currentOperator === null) {
    firstOperand = display.textContent;
  } else {
    secondOperand = display.textContent;
  }
}

function setOperator(operator) {
  if (currentOperator !== null && secondOperand !== '') {
    evaluate();
  }
  currentOperator = operator;
  firstOperand = display.textContent;
  shouldResetDisplay = true;
}

function evaluate() {
  if (currentOperator === null || shouldResetDisplay) return;
  if (currentOperator === '/' && display.textContent === '0') {
    display.textContent = 'Nice try';
    resetState();
    return;
  }

  const result = operate(currentOperator, firstOperand, secondOperand);
  display.textContent = roundResult(result);
  resetState(display.textContent);
}

function clear() {
  display.textContent = '0';
  resetState();
}

function backspace() {
  if (shouldResetDisplay || display.textContent === 'Nice try') return;

  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = '0';
  }

  if (currentOperator === null) {
    firstOperand = display.textContent;
  } else {
    secondOperand = display.textContent;
  }
}

function resetState(result = '') {
  firstOperand = result;
  secondOperand = '';
  currentOperator = null;
  shouldResetDisplay = true;
}

function roundResult(result) {
  if (typeof result === 'string') return result;
  return Math.round(result * 100000) / 100000;
}

// ✅ Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    appendNumber(e.key);
  } else if (e.key === '.') {
    appendNumber('.');
  } else if (['+', '-', '*', '/'].includes(e.key)) {
    setOperator(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    e.preventDefault();
    evaluate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key.toLowerCase() === 'c') {
    clear();
  }
});
