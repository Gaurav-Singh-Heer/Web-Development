const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()
// Create a router instance
const router = express.Router() 

// Router-level middleware to log requests to "/api" routes
router.use('/users', (req, res, next) => {
    if (!req.headers.authorization) { // Check if user is authenticated
      return res.status(401).send('Unauthorized') // Respond with Unauthorized if not authenticated
    }
    next() // Pass control to the next middleware or route handler
})

router.get('/users', (req, res) => {
  res.send('User list') // Respond with a list of users
})

app.use('/api', router) // Apply the router to all routes starting with "/api"

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
/*
Eg 2 Authorization for User Routes
Problem Definition: To implement route-specific authentication for routes related to users.

// Router-level middleware to check authentication for "/users" routes
router.use('/users', (req, res, next) => {
  if (!req.headers.authorization) { // Check if user is authenticated
    return res.status(401).send('Unauthorized') // Respond with Unauthorized if not authenticated
  }
  next() // Pass control to the next middleware or route handler
})
router.get('/users', (req, res) => {
  res.send('User list') // Respond with a list of users
})
app.use('/api', router) // Apply the router to all routes starting with "/api"


/*
    Steps to Execute:
    >node server
    Open Postman and navigate to `http://localhost:8080/api/users`.
    Without an authentication middleware, you’ll get a `401 Unauthorized` response unless authentication is set up.
*/
