const fs= require("fs");

let name ="Gaurav"

fs.appendFileSync("./3_5_test.txt"," "+new Date().getDate().toLocaleString()+ " ");
fs.appendFileSync("./3_5_test.txt","Hey There welcome I am Gaurav \n");
fs.appendFileSync("./3_5_test.txt",`Hey There welcome I am ${name} \n`);
fs.appendFileSync("./3_5_test.txt",`${Date.now()} Hey There  this is the best time \n`);