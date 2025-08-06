//import express module
const express=require('express');
const app=express();

//middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('Welcome to the Home Page!');
});

app.get('/about',(req,res)=>{
    res.send('This is the about page');
});

app.post('/contact',(req,res)=>{
const name=req.body.name;
console.log(name);
res.send(`Thank you for contacting us ${name}!`);
});

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
});
