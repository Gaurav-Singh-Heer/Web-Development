const path=require('path')

const a1 =path.basename('D:\GAURAV   CODING\WEB DEVELOPMENT\CHITKARA WEB DEVLOPMENT FEE 2\Node Chitkara')
const a2 =path.dirname('D:\GAURAV   CODING\WEB DEVELOPMENT\CHITKARA WEB DEVLOPMENT FEE 2\Node Chitkara')
console.log(a1)
console.log(a2)
const a3 =path.extname(__filename)             // extension name
console.log(__filename, a3)