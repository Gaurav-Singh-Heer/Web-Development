const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 1. Home page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
});

// 2. About page
app.get('/about', (req, res) => {
    res.send('<h1>This is the About Page</h1>');
});

// 3. Send HTML file
app.get('/htmlfile', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle form POST submission
app.post('/contact', (req, res) => {
    const { name, phone } = req.body;
    console.log(`Name: ${name}, Phone: ${phone}`);
    res.send(`<h2>Thanks, ${name}! We received your contact info.</h2>`);
});

// Start server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
