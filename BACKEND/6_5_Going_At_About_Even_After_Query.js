const http=require("http")
const fs=require("fs")
const url=require("url") // It first Check at package.json if not found there then it import on it's own

const myServer=http.createServer((req,res)=>{
    
    if(req.url==="/favicon.ico") return res.end(); // By this we will not log /favicon.ico in txt file
    const log=`${Date.now()}:${req.url} New Request Received\n`;
    const myUrl=url.parse(req.url);
    console.log(myUrl.pathname);
    fs.appendFile('6_5_log.txt',log,(err,data)=>{
        switch(myUrl.pathname){           // Changed This switch
            case '/':
                res.end("HomePage");
            break
            case '/about':
                res.end("I am Gaurav Singh Heer");
            break
            default:
                res.end("404 Not found");
            break
        }
    }); // not using synchronous as if all thread in work user has to wait
})

myServer.listen(8000,()=>console.log("Server Started!"));