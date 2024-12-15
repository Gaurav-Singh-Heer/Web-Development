const http=require('http')
const fs=require('fs')

const fileContent=fs.readFileSync('62_Json.html')

const server=http.createServer((req,res)=>{

    res.writeHead(200,{'Content-type':'text/html'})      // Response Code->200;(OK)
    res.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80, Open 127.0.0.1")
})