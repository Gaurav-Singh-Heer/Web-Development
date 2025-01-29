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
  
// Application-level middleware to parse incoming JSON request bodies
app.use(express.json()) // Parse JSON body

app.get('/', (req, res) => {
    res.send('Hello, World!') // Respond with 'Hello, World!'
})

app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`) // Respond with received data
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
Eg 4 Request Body Parsing
Problem Definition: To use application-level middleware to parse incoming JSON request bodies.


// Application-level middleware to parse incoming JSON request bodies
app.use(express.json()) // Parse JSON body


app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`) // Respond with received data
})


/*
Steps to Execute:
    >node server
    Open Postman, set the request method to `POST`, and use the URL `http://localhost:8080/`.
    In the "Body" section, select `raw`, choose `JSON`, and add data like: 
    {
        "name": "Chitkara University",
        "department": "CSE"
    }
*/


/*
{
    "Name": "Gaurav",
    "Age" : "19",
    "DOB" : "11:08:2005"
}

Received data: {"Name":"Gaurav","Age":"19","DOB":"11:08:2005"}

|                           ++++++++++++++++++++++++++++++++++++++++++++++++

IF Commented:- app.use(express.json()) // Parse JSON body

Then Received data: undefined

|                           ++++++++++++++++++++++++++++++++++++++++++++++++

{
    "Name": "Gaurav",
    "Marks":{
        "Maths":"80",
        "English":"100"
    }
}

Received data: {"Name":"Gaurav","Marks":{"Maths":"80","English":"100"}}

*/