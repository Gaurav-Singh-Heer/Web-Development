const port = 8080
// Import the express module
const express = require('express') // Express library for creating the server
//Create rest object
const app = express()
// Create a router instance
const router = express.Router() 

// Router-level middleware to log requests to "/api" routes
router.use((req, res, next) => {
  console.log('Request to /api route:', req.method, req.url)
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
Eg 1 Logging Requests to Specific Routes
Problem Definition: To apply router-level middleware to log requests to specific routes (e.g., `/api/users`).

// Router-level middleware to log requests to "/api" routes
router.use((req, res, next) => {
  console.log('Request to /api route:', req.method, req.url)
  next() // Pass control to the next middleware or route handler
})
router.get('/users', (req, res) => {
  res.send('User list') // Respond with a list of users
})
app.use('/api', router) // Apply the router to all routes starting with "/api"

/*
    Steps to Execute:
    >node server
    Open Postman or your browser and navigate to `http://localhost:8080/api/users`.
    Check your terminal for the log output of the HTTP request.
*/
