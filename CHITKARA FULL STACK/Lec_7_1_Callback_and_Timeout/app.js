const fs=require("fs")
setTimeout(()=>{
    console.log("This is timer 1")
},0);
setImmediate(()=>{
    console.log("this is from setImmediate")
})
console.log("This is from top level console log");
fs.readFile("8july.txt","utf-8",()=>console.log("from 8 july file"))
