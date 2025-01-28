// Import the Express library
const express = require('express')
// Create an instance of an Express application
const app = express()
// Example route that throws an error
// This route simulates an error by throwing it when accessed
app.get('/', (req, res, next) => {
    const error = new Error('Something went wrong') // Create a new error
    next(error) // Pass the error to the error-handling middleware
})
app.get('/hello', (req, res) => {
    res.send('Hello, World!') // Non-error route that responds normally
})
// Error-handling middleware
// This middleware catches any errors passed to the `next` function
app.use((err, req, res, next) => {
    console.error(err.stack) // Log the full error stack for debugging
    res.status(500).send('Something went wrong!') // Send a 500 error response to the client
})

// Start the server and listen on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080') // Log a message indicating the server is running
})
/*
Test urls
http://localhost:8080/hello     -> without error
http://localhost:8080/          -> with error
*/
