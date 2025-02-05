const express = require('express');
const cors = require('cors'); // Import CORS

const app = express();
const port = 8080;

// Enable CORS for all domains
app.use(cors());

// Test route
app.get('/', (req, res) => {
    res.send('CORS is enabled'); // Response message
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

/*
Eg 2 CORS Middleware (Cross-Origin Resource Sharing)
Problem Definition: Allowing cross-origin requests from a different domain or port.
const cors = require('cors')
//Create rest object
const app = express()
// Use cors middleware to enable cross-origin requests
// This will allow requests from any domain
app.use(cors()) // This enables CORS for all incoming requests
// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('CORS is enabled') // Respond with a message
})

/*
    Steps to Execute:
    >node server
    Visit http://localhost:8080/ to confirm CORS is working
*/
