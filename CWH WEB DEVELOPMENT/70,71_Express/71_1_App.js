const express = require("express");

const app = express();
const port = 80;

app.get("/", (req,res)=>{
    res.send("This is homepage of my first express app with Harry");
});

app.get("/about", (req,res)=>{
    res.send("This is Aboutpage of my first express app with Harry");
});

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})