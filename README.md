JavaScript Calculator
Overview
This project is a simple calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. The calculator is responsive and interactive, allowing users to input numbers and operations via buttons.

Features
Basic Operations: Supports addition, subtraction, multiplication, and division.

Error Handling: Displays a snarky error message when dividing by zero.

Clear Button: Resets the calculator and clears any entered values.

Decimal Support: Users can input floating-point numbers.

Backspace Button: Undo the last input if the wrong number is clicked.

Keyboard Support: Users can interact with the calculator using their keyboard.

Getting Started
Prerequisites
To run this project, you need:

A web browser (Chrome, Firefox, Safari, etc.)

A text editor (VSCode, Sublime Text, etc.)

Installation
Clone or download this repository to your local machine.

bash
Copy
Edit
git clone git@github.com:brendonhwang/Calculator.git
Open the index.html file in your browser to start using the calculator.

How It Works
The calculator consists of:

HTML: Structure of the calculator, including buttons for digits and operations.

CSS: Basic styling to make the calculator visually appealing.

JavaScript: Handles the functionality, including performing operations and updating the display.

Key Functions in JavaScript
add(a, b): Adds two numbers.

subtract(a, b): Subtracts the second number from the first.

multiply(a, b): Multiplies two numbers.

divide(a, b): Divides the first number by the second, with error handling for division by zero.

operate(operator, num1, num2): Takes an operator and two numbers, and calls the appropriate math function.

Known Issues
Pressing "=" before entering an operator may cause errors. Ensure that the sequence of inputs is correct.