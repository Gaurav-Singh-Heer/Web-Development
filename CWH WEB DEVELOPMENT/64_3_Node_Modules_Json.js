const fs = require("fs");

let text = fs.readFileSync("64_1_Module.txt", "utf-8");

// Replace 'Gaurav' with 'Saurav'
text = text.replace("Gaurav", "Saurav");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("64_3_Module.txt", text);
