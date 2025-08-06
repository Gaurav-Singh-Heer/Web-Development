const fs = require("fs")
fs.readFile('myFile.txt', function(err, data){
    if(err){
        console.error(err);        
    }
    else{
        console.log(data.toString());
    }
})
console.log("Program last line");