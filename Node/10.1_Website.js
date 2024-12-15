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
})

// server.listen(`Server is listening on port ${port}`);
server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
});

// http://localhost:3000/
// Search This address