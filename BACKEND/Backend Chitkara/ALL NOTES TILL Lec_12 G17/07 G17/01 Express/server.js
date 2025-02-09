//initialyse project
//>npm init -y
//download express module
//>yarn add express --save
//import express module
let express = require('express')
//create rest object
let app = express() //where app is rest object
//create get request
app.get("/",(req,res)=>{
    console.log('Default get message')
    res.json({'message':'default get request'})
})
//create one more get request
app.get("/fetch", (req, res) => {
    res.send({ 'message': 'fetch get request' })
})
//create post request
app.post("/", (req, res) => {
    res.send({ 'message': 'default post request' })
})
//create one more post request
app.post("/login", (req, res) => {
    res.send({ 'message': 'login post requrest' })
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
