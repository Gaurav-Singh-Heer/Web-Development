// Import the fs module
let fs = require("fs");
let path = require("path");

// Define the file path
let filePath = path.join(__dirname, "../files/output.txt");

// Write data asynchronously
fs.writeFile(filePath, "hi", (err) => {
    if (err)
        console.log("Error while writing data: ", err);
    else
        console.log("Data write success");
});

console.log("I am here");
