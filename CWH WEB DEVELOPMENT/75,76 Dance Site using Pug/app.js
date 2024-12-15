const express=require("express");
const path=require("path")
const fs=require("fs")
const app=express()
const port=8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())// urlen , helps to bring form data to express

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

//Endpoints
app.get('/', (req, res) => {
    params = { }
    res.status(200).render('index.pug', params)
})

// Start The Server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`)
})