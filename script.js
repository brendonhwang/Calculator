let currentDisplay = '0'; // To keep track of what’s on the screen
let firstNum = null;
let secondNum = null;
let operator = null;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = currentDisplay;
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    const value = button.getAttribute("data-value");

    if (value === 'C') {
      currentDisplay = '0';
      firstNum = null;
      secondNum = null;
      operator = null;
      updateDisplay();
    } else if (value === "=") {
      secondNum = parseFloat(currentDisplay);
      const result = operate(operator, firstNum, secondNum);
      currentDisplay = result.toString();
      updateDisplay();
      firstNum = null; // Reset after calculating
      operator = null;
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (firstNum === null) {
        firstNum = parseFloat(currentDisplay);
      } else {
        secondNum = parseFloat(currentDisplay);
        firstNum = operate(operator, firstNum, secondNum);
        currentDisplay = firstNum.toString();
      }
      operator = value;
      updateDisplay();
    } else {
      // Handle numbers and decimal point
      if (currentDisplay === '0') {
        currentDisplay = value;
      } else {
        currentDisplay += value;
      }
      updateDisplay();
    }
  });
});
