const fs=require('fs');

// fs.readFile('file.txt', 'utf8',(err,data)=>{            // Callback funcion :it has 2 things error and data
//     console.log(err,data);
// })

// const a=fs.readFileSync('file.txt');
// console.log(a)                               // printed first, as readFileSync block other work and  
// console.log(a.toString())                    // first complete it's execution

fs.writeFile('file2.txt',"This is a data",()=>{
    console.log("Written to the file");
})

console.log("Finished Reading File")           // This is printed later