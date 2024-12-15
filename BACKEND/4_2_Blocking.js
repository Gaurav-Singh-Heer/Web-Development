const fs=require("fs")

console.log("1")

// Blocking...
const result = fs.readFileSync("./3_3_Contact.txt","utf-8");
console.log(result)

console.log("2")