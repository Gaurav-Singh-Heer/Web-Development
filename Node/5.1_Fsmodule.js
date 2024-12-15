const fs=require('fs');

fs.readFile('file.txt', 'utf8',(err,data)=>{            // Callback funcion :it has 2 things error and data
    console.log(err,data);
})

console.log("Finished Reading File")           // This is printed first