// main.js

const greet = require('./greet');           // Import function
const config = require('./config');         // Import object
const Person = require('./person');         // Import class

// Use the greet function
console.log(greet("Gaurav"));

// Use the config object
console.log("App Info:");
console.log(`Name: ${config.appName}`);
console.log(`Version: ${config.version}`);
console.log(`Environment: ${config.environment}`);

// Use the Person class
const user = new Person("Agam", 21);
console.log(user.introduce());
