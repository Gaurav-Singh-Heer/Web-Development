const http=require("http")
const fs=require("fs")
const url=require("url")

function myHandler(req,res){

    if(req.url==="/favicon.ico") return res.end(); 
    const log=`${Date.now()}:${req.method} ${req.url} New Request Received\n`;   // ${req.method} To Check Request Type and add it to log.txt
    const myUrl=url.parse(req.url, true);       
    console.log(myUrl);
    fs.appendFile('8_1_log.txt',log,(err,data)=>{
        switch(myUrl.pathname){           
            case '/':
                if(req.method==="GET"){
                    res.end("HomePage");
                }
                break
            case '/about':
                const username= myUrl.query.myname;
                res.end(`I am ${username}`);   
                break
            case '/signup':
                if(req.method==="GET"){
                    res.end('This is a Sign Up Form')
                }
                else if(req.method==="POST"){           // Means user wants to sign up
                    // First we will add data at database using DB query. Then,
                    res.end("Success")
                }
            default:
                res.end("404 Not found");
                break
        }
    }); 
}

const myServer=http.createServer(myHandler)

myServer.listen(8000,()=>console.log("Server Started!"));