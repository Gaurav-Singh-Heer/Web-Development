const fs=require("fs")
const text=fs.readFileSync("64_Module.txt");

console.log(text);

const text2=fs.readFileSync("64_1_Module.txt", "utf-8");

console.log(text2);