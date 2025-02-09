let resText = `Welcome to Http server`
let myResponse = 
`
        <!DOCTYPE html>
<html>
    <head>
        <style>
            body{
                background-color: black;
            }
            h1{
                color: black;
                text-shadow: 0px 0px 2px red;
            }
        </style>
    </head>
    <body>
        <h1>${resText}</h1>
    </body>
</html>
        `
//import http module
let http = require('http')
let server =  http.createServer((req,res)=>{
    //set MIME type
    res.writeHead(200,{'content-type':'text/html'})
    res.write(myResponse)
    res.end()
})
//assign port no
server.listen(8080)
console.log('Server listenig port no 8080')
/*
    start server
    >node server

    url http://localhost:8080
*/