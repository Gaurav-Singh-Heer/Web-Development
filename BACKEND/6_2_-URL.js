const http=require("http")
const fs=require("fs")

const myServer=http.createServer((req,res)=>{
    
    if(req.url==="/favicon.ico") return res.end(); // By this we will not log /favicon.ico in txt file
    const log=`${Date.now()}:${req.url} New Request Received\n`;
    fs.appendFile('6_2_log.txt',log,(err,data)=>{
        switch(req.url){
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