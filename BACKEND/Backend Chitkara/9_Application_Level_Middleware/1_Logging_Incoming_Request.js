const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()


// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`) // Log the request method and URL
    next() // Pass control to the next middleware or route handler
})
  
app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!' when the root URL is accessed
})
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
Eg 1 Logging Incoming Requests
Problem Definition: Demonstrate to log HTTP method and URL for each incoming request using application-level middleware.


// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`) // Log the request method and URL
    next() // Pass control to the next middleware or route handler
})


app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!' when the root URL is accessed
})

Steps to Execute:
>node server
Open a browser or Postman and navigate to `http://localhost:8080/`.
Check your terminal to see the HTTP method and URL being logged for the request.
*/