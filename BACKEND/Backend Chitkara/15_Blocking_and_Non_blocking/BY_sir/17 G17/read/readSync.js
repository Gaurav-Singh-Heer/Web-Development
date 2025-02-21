//import fs module
let fs = require('fs')
//read data synchronously
let data = fs.readFileSync(require('../path'),'utf-8')
console.log(data)
console.log('I am here')