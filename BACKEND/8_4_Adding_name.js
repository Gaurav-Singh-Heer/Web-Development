const http=require("http")
const express=require("express")

const app=express();   // Making an application, Through this app we can do any work. So, app is initiallized

// This app is basically a handler function. We have all handlers get, post, put, delete patch.
app.get("/",(req,res)=>{ // '/' means to apply this app at home page
    return res.send("Hello From Home Page")
});

app.get("/about",(req,res)=>{
    return res.send(`Hello ${req.query.name}`);
});

const myServer=http.createServer(app)

myServer.listen(8000,()=>console.log("Server Started!"));