const http=require("http")
const fs=require("fs")
const url=require("url")

const myServer=http.createServer((req,res)=>{
    
    if(req.url==="/favicon.ico") return res.end(); 
    const log=`${Date.now()}:${req.method} ${req.url} New Request Received\n`;   // ${req.method} To Check Request Type and add it to log.txt
    const myUrl=url.parse(req.url, true);       
    console.log(myUrl);
    fs.appendFile('7_1_log.txt',log,(err,data)=>{
        switch(myUrl.pathname){           
            case '/':
                res.end("HomePage");
                break
            case '/about':
                const username= myUrl.query.myname;
                res.end(`I am ${username}`);   
                break
            default:
                res.end("404 Not found");
                break
        }
    }); 
})

myServer.listen(8000,()=>console.log("Server Started!"));