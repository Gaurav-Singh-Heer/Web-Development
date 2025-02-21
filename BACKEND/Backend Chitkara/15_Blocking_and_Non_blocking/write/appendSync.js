// Import required modules
let fs = require("fs");
let path = require("path");

// Define the correct file path
let filePath = path.join(__dirname, "../files/output.txt");

// Append data synchronously
fs.appendFileSync(filePath, "\tWelcome\n");

// Read and log the file content
console.log("Data appended:\n", fs.readFileSync(filePath, "utf-8"));

console.log("I am here");
