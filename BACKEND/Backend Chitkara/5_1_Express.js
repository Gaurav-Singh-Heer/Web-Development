let express = require("express");

let app = express();

app.get("/",(req,res)=>{
    console.log("Default get Message");
    res.json({'message':'default get request'})  
})

app.get("/fetch",(req,res)=>{
    console.log("Fetch Message");
    res.json({'message':'fetch get request'})  
})


app.post("/",(req,res)=>{
    console.log("Default Post Message");
    res.json({'message':'default post request'})  
})

app.post("/login", (req,res)=>{
    console.log("Login Post Message");
    res.json({'message':'login post request'})  
})

//create a port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no ', port)
})


/*
    Test urls with postman
    http://localhost:8080           Default GET
    http://localhost:8080/fetch     fetch GET
    http://localhost:8080           Default POST
    http://localhost:8080/login     login POST
*/
