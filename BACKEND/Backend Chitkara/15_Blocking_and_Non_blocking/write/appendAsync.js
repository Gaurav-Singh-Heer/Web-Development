// Import required modules
let fs = require("fs");
let path = require("path");

// Define the correct file path
let filePath = path.join(__dirname, "../files/output.txt");

// Append data asynchronously
fs.appendFile(filePath, "Good Morning\n", (err) => {
    if (err) {
        console.log("Error while appending data:", err);
    } else {
        console.log("Append Success");

        // Read and log file content
        console.log(fs.readFileSync(filePath, "utf-8"));
    }

    console.log("I am here");
});
