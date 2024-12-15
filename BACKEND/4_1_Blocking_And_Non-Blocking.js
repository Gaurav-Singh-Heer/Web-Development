const fs=require("fs")

// Sync... Blocking...
fs.writeFileSync("./4_1_test.txt","Hello World")

// Async.. Non-Blocking
fs.writeFile("./4_1_test.txt","Hello World Async",(err)=>{})