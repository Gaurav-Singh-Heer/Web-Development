const fs=require("fs");

// Async....
fs.writeFile("./3_2_test.txt","Hey There",(err)=>{}) 
fs.writeFile("./3_2_test.txt","Hello world Async",(err)=>{}) // this will overwrite "Hey There" in file

// (err)=>{} is to handle errors