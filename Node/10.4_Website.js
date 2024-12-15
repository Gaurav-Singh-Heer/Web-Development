const {Console}=require('console');
const http=require ('http');
// const port=process.env.port;
const port=process.env.PORT || 3000;
const server=http.createServer((req,res) =>{          // It has callback (inside callback we have request,response)
    res.statusCode=200;                               // 200=OK, 404= Server Not Found
    res.setHeader('Content-Type', 'text/html');
    
    console.log(req.url);

    if(req.url=='/'){
        res.end(`<h1>Hey This is Gaurav Singh Heer !!! Might be Future Professional Coder</h1>`);
    }
    else if(req.url=='/about'){
        res.end(`<h1>Hey, This is ABOUT Gaurav Singh Heer !!! Might be Future Professional Coder</h1>`);
    }
    else{
        res.gaurav();
        res.statusCode=404;
        res.end(`<h1> Not Found </h1> <p> Hey this page was not found on this server!!.`);
    }
})

// server.listen(`Server is listening on port ${port}`);
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});

// http://localhost:3000/
// Search This address


/*
/wqdbjw
D:\GAURAV   CODING\WEB DEVELOPMENT\Node\10.4_Website.js:18
        res.gaurav();
            ^

TypeError: res.gaurav is not a function
    at Server.<anonymous> (D:\GAURAV   CODING\WEB DEVELOPMENT\Node\10.4_Website.js:18:13)
    at Server.emit (node:events:519:28)
    at parserOnIncoming (node:_http_server:1150:12)
    at HTTPParser.parserOnHeadersComplete (node:_http_common:118:17)

Node.js v22.9.0
[nodemon] app crashed - waiting for file changes before starting...

*/