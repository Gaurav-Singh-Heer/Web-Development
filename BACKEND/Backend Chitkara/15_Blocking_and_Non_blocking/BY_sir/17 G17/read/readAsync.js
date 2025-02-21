//import fs module
let fs = require('fs')
//read data asynchronously
fs.readFile(require('../path'),'utf-8',(err, data)=>{
    if (err)
        console.log('Error while reading data ', err.code)
    else
        console.log(data)
})
console.log('I am here')