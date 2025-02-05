const port = 8080;
const express = require('express');
const morgan = require('morgan'); // Import morgan

const app = express();
const router = express.Router();

app.use(morgan('dev')); // Logs requests in 'dev' format

// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World'); // Respond to a GET request with a message
});

// Another test route
app.get('/hello', (req, res) => {
    res.send('Hello, User!');
});

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
Eg 1 Morgan (HTTP Request Logging Middleware)
Problem Definition: We need to log incoming HTTP requests to monitor traffic and debug issues.

// Use morgan for HTTP request logging in 'dev' format
// This will log concise info about each request
app.use(morgan('dev')) // Logs requests with concise info
// Define a simple route for testing
app.get('/', (req, res) => {
    res.send('Hello World') // Respond to a GET request with a message
})

/*
    Steps to Execute:
    >node server
    Visit   http://localhost:8080/ 
            AND
            http://localhost:8080/hello to see the logs in the console
*/

