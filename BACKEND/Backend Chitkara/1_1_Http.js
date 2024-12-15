let http=require('http')

let server=http.createServer((req,res)=>{
    // set MIME type
    res.writeHead(200,{'content-type':'text/html'})
    res.write(`<h1>Welcome to the http server <i>This is made by GSH</i></h1>`)
    res.end();                                       // To stop that rotation in title bar of server
});

// assign port no
server.listen(8080)
console.log("Server listening on port no 8080")

/*
D:\GAURAV   CODING\WEB DEVELOPMENT\BACKEND\Backend Chitkara>start 1_1_Http.js

D:\GAURAV   CODING\WEB DEVELOPMENT\BACKEND\Backend Chitkara>
node 1_1_Http.js
Server listening on port no 8080
*/