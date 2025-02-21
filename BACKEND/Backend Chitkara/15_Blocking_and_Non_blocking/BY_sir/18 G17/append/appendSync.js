//import fs module
let fs = require('fs')
let path = require('../path')
//append data synchronously
fs.appendFileSync(path, '\tWelcome')
console.log('Data appended\n', fs.readFileSync(path, 'utf-8'))
console.log('I am here')
