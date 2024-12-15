const http=require("http")
const fs=require("fs")

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()}: New Request Received\n`;
    fs.appendFile('5_6_log.txt',log,(err,data)=>{
        res.end("Hello From Server");
    }); // not using synchronous as if all thread in work user has to wait
})

myServer.listen(8000,()=>console.log("Server Started!"));