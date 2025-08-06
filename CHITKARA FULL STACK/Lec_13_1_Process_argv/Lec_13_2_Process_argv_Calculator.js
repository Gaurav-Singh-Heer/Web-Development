// Get the user input from command-line arguments
const input = process.argv[2]; // e.g., "10-5"

// Check if input exists
if (!input) {
    console.log("Usage: node calculator.js <number1><operator><number2>");
    console.log("Example: node calculator.js 10+5");
    process.exit(1);
}

// Use regular expression to extract numbers and operator
const match = input.match(/^(-?\d+)([+\-*/%])(-?\d+)$/);

if (!match) {
    console.log("Invalid format. Use format: number1<operator>number2 (e.g., 10+5)");
    process.exit(1);
}

// Destructure matched groups
const [, num1Str, operator, num2Str] = match;

const num1 = Number(num1Str);
const num2 = Number(num2Str);
let result;

// Perform calculation based on operator
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
    case '%':
        result = num2 !== 0 ? num1 % num2 : "Error: Modulo by zero";
        break;
    default:
        result = "Unsupported operator";
}

// Display result
console.log(`Result: ${result}`);
