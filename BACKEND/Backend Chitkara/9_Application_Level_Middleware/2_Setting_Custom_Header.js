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
  
  
app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!'
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
    Steps to Execute:
    >node server
    Open a browser or Postman and navigate to `http://localhost:8080/`.
    Check your terminal to see the HTTP method and URL being logged for the request.


Eg 2 Setting a Custom Header for All Responses
Problem Definition: To set a custom header (X-Powered-By) for every HTTP response using application-level middleware.


// Application-level middleware to set a custom header for all responses
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express') // Set custom header 'X-Powered-By'
  next() // Pass control to the next middleware or route handler
})


app.get('/', (req, res) => {
  res.send('Hello, World!') // Respond with 'Hello, World!'
})


Steps to Execute:
    >node server
    Open a browser or Postman and navigate to `http://localhost:8080/`.
    Inspect the response headers in the browser's developer tools or in Postman to see the `X-Powered-By: Express` header.
*/
