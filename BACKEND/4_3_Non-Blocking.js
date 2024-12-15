const fs=require("fs")

console.log("1")

//Non Blocking...
fs.readFile("./3_3_Contact.txt","utf-8",(err,result)=>{
    console.log(result);
});

console.log("2")
console.log("3")
console.log("4")