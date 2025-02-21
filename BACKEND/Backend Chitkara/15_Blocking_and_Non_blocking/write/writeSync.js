// Import fs module
let fs = require('fs');
let path = require('path');

// Define the correct file path
let filePath = path.join(__dirname, '../files/output.txt');

// Write data synchronously
fs.writeFileSync(filePath, 'Hello...!');
console.log('Write Success');
console.log('I am Here');
