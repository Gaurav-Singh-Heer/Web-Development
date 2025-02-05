const express = require('express'); // Import Express
const helmet = require('helmet'); // Import Helmet

// Create Express app
const app = express();
const port = 8080;

// Use Helmet middleware to set secure HTTP headers
app.use(helmet());

// Define a test route
app.get('/', (req, res) => {
    res.send('Security applied');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



/*
Eg 3 Helmet Middleware (Security Headers)
Problem Definition: Adding security headers to protect against various attacks (e.g., XSS, clickjacking).

const helmet = require('helmet')
//Create rest object
const app = express()
// Use helmet middleware to automatically set secure HTTP headers for the app
app.use(helmet())
// Define a route handler for the root URL ('/') which sends 'Hello World!' as the response
app.get('/', (req, res) => {
    // Send a 'Security applied' message when the root URL is accessed
    res.send('Security applied')
})


/*
    Steps to Execute:
    >node server
    Visit http://localhost:8080/ to confirm Security is working
    What is observation in Postman ?
	Check number response headers with and without helmet
*/
