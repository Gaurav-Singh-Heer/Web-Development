const express = require("express")
const app = express();

// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req,res,next) =>{
    console.log('Inside Middleware');
    console.log(`${req.method} ${req.url}`)
    next()                                                     // Pass the control to the next middleware or route handler
})

app.get("/", (req,res)=>{
    console.log("Inside route handler")
    res.send("Hello , world");
})

// app.post("/",(req,res) =>{          // or
app.post("/user",(req,res) =>{
    res.send("POST REQUEST")
})

const PORT = 8080;

app.listen(PORT, ()=>{
    console.log(`server is listening at PORT ${PORT}`);
})

/*

OUTPUT IN TERMINAL:-

server is listening at PORT 8080
Inside Middleware
POST /
Inside Middleware
GET /
Inside route handler
Inside Middleware
POST /user
*/