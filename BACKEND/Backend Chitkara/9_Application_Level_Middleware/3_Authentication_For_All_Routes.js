const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()


// Application-level middleware to log the HTTP method and URL of each incoming request and
// Application-level middleware to set a custom header for all responses
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`) // Log the request method and URL
    res.setHeader('X-Powered-By', 'Express') // Set custom header 'X-Powered-By'
    res.setHeader('My_Name', 'Gaurav') // Set custom header 'My_Name'
    next() // Pass control to the next middleware or route handler
})

// Application-level middleware to require authentication for all routes
app.use((req, res, next) => {
    if (!req.headers.authorization) { // Check if authorization header exists
        return res.status(403).send('Forbidden') // Respond with Forbidden if no authorization
    }
    next() // Pass control to the next middleware or route handler
})
  
  
app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!'
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
Eg 3 Authentication for All Routes
Problem Definition: Add a basic authentication middleware for all routes, blocking access if no Authorization header is provided.


// Application-level middleware to require authentication for all routes
app.use((req, res, next) => {
    if (!req.headers.authorization) { // Check if authorization header exists
        return res.status(403).send('Forbidden') // Respond with Forbidden if no authorization
    }
    next() // Pass control to the next middleware or route handler
})


app.get('/', (req, res) => {
    res.send('Hello, World!')
})

/*
Steps to Execute:
    >node server
    Open Postman and make a GET request to `http://localhost:8080/`.
    - Without any `Authorization` header, the response should be `403 Forbidden`.
    - Add an `Authorization` header with any value to see the successful response.
*/