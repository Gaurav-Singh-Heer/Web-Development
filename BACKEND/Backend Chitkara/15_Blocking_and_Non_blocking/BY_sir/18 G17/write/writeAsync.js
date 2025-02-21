//import fs module
let fs = require('fs')
//write data asynchronously
fs.writeFile(require('../path'),'hi',(err)=>{
    if(err)
        console.log('Error while writing data:- ',err)
    else
    console.log('Data write success')
})
console.log('I am here')