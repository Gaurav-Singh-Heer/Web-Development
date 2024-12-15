const http=require("http")
const fs=require("fs")
const url=require("url") // It first Check at package.json if not found there then it import on it's own

const myServer=http.createServer((req,res)=>{
    
    if(req.url==="/favicon.ico") return res.end(); 
    const log=`${Date.now()}:${req.url} New Request Received\n`;
    const myUrl=url.parse(req.url, true);       // , true For Query parameters
    console.log(myUrl);
    fs.appendFile('6_6_log.txt',log,(err,data)=>{
        switch(myUrl.pathname){           
            case '/':
                res.end("HomePage");
            break
            case '/about':
                const qp=res.end("I am Gaurav Singh Heer");   
            break
            default:
                res.end("404 Not found");
            break
        }
    }); // not using synchronous as if all thread in work user has to wait
})

myServer.listen(8000,()=>console.log("Server Started!"));