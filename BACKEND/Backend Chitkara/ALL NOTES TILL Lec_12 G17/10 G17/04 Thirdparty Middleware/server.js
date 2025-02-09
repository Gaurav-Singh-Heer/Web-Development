// Import the Express library to create the application
const express = require('express')
// Import the morgan library for HTTP request logging (third-party middleware)
const morgan = require('morgan')
// Create an instance of an Express application
const app = express()
// Use morgan middleware for logging HTTP requests
// The 'dev' format is a preset that provides colored status codes and concise logs
app.use(morgan('dev'))
// Example route that responds to a GET request at the root ('/')
app.get('/', (req, res) => {
    res.send('Hello, World!') // Sends 'Hello, World!' as the response to the client
})
// Start the server and listen on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080') // Logs a message when the server starts
})
/*
Test urls :-
http://localhost:8080/
http://localhost:8080/hello
*/