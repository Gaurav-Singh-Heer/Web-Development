// How to save static file in nodejs uing express

// Static Files, File which we want to keep publically in our server

const express = require("express");

const app = express();
const port = 80;

// For serving static files
app.use('/static',express.static('static'))

app.get("/", (req,res)=>{
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about", (req,res)=>{
    res.send("This is About page of my first express app with Harry");
});

app.post("/about", (req,res)=>{
    res.send("This is a post request ofAboutpage of my first express app with Harry");
});

app.get("/this", (req,res)=>{
    res.status(404).send("This page is not found");
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})