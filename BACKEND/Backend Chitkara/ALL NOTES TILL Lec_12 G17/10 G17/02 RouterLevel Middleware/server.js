// Import the Express library
const express = require('express')
// Create an instance of an Express application
const app = express()
// Create a router instance
const router = express.Router()
// Router-level middleware
// This middleware will be executed for every route defined on the router
router.use((req, res, next) => {
  console.log('Router-level middleware') // Logs a message every time a request hits the router
  next() // Passes control to the next middleware or route handler
})


// Define a GET route for "/users" on the router
router.get('/users', (req, res) => {
  res.send('User list') // Responds with a simple message "User list" when the "/users" route is accessed
})


// Use the router with the main Express app
// Any route starting with "/api" will now be handled by the router defined above
app.use('/api', router) // All routes that match "/api/*" will pass through the router


// Start the Express server and make it listen on port 8080
app.listen(8080, () => {
  console.log('Server is running on port 8080') // Logs a message indicating the server has started and is listening on port 8080
})
//test url http://localhost:8080/api/users
