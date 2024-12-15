/*
Synchronous or blocking
- line by line execution

Asynchronous or Non-blocking
- line by line execution not guaranteed
- callbacks will fire
*/

const fs = require("fs");
let text = fs.readFile("64_1_Module.txt", "utf-8", (a,b)=>{      //(err,data)
    console.log(a,b);
});

// let text = fs.readFile("64_1_Module.txt", "utf-8", (a,b)=>
//     console.log(a,b)
// );
console.log("This is a message");


let text2 = fs.readFile("64_3_Module.txt", "utf-8", (a,b)=>{         //(err,data)
    console.log(a,b);
});

console.log("checkPost");