// How to save static file in nodejs uing express

// Static Files, File which we want to keep publically in our server

const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// Express Specific Stuff
app.use('/static',express.static('static'))// For serving static files

// Pug Specific Stuff
app.set('view engine','pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// Set the views directory

//Endpoints
app.get('/',(req,res)=>{
    res.status(200).render('73_1_index.pug')
})

// Start The Server
app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})