const fs=require("fs")

let text=fs.readFileSync("64_1_Module.txt", "utf-8");
text=text.replace("Gaurav","Saurav")
console.log(text);