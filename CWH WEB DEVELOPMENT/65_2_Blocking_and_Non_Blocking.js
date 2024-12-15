/*
Synchronous or blocking
- line by line execution

Asynchronous or Non-blocking
- line by line execution not guaranteed
- callbacks will fire
*/

const fs = require("fs");
let text = fs.readFile("64_1_Module.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});

console.log("checkPost");

let text2 = fs.readFile("ErrorA.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});

console.log("checkPost2");
