// app.js

// Import the calculator module
const calculator = require('./Calculator');

// Sample inputs
let a = 10;
let b = 5;

// Using all functions
console.log(`Add: ${calculator.add(a, b)}`);         // 15
console.log(`Subtract: ${calculator.subtract(a, b)}`); // 5
console.log(`Multiply: ${calculator.multiply(a, b)}`); // 50
console.log(`Divide: ${calculator.divide(a, b)}`);     // 2
