// How to save static file in nodejs uing express

// Static Files, File which we want to keep publically in our server

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())// urlen , helps to bring form data to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//Endpoints
app.get('/', (req, res) => {
    const con = 'This is the best coder in Chitkara so use me wisely';
    params = { 'title': 'Chess is the best Game', "content": con }
    res.status(200).render('74_2_gym.pug', params)
})

app.post('/', (req,res)=>{
    // form= req.body;
    name=req.body.name;
    age=req.body.age;
    gender=req.body.gender;
    address=req.body.address;
    more=req.body.more;
    
    let outputToWrite=`The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params= {'message':'Your form has been submitted successfully'}
    res.status(200).render('74_2_gym.pug', params);

})

// Start The Server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})