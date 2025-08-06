// import express module
const express = require('express');
const app = express();

// middleware to parse application/json
app.use(express.json());

// middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// Contact POST route
app.post('/contact', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    console.log(`Received contact: Name=${name}, Phone=${phone}`);
    res.send(`Thank you for contacting us, ${name}!`);
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
