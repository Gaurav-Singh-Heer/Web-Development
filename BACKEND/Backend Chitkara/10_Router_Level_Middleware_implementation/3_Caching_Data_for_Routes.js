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

// Simple in-memory cache object
const cache = {}
// Router-level middleware to cache data for "/products" routes
router.use('/products', (req, res, next) => {
  if (cache[req.url]) { // Check if the request URL is cached
    return res.json(cache[req.url]) // Serve cached data
  }
  next() // Continue to the next handler if no cache exists
})
router.get('/products', (req, res) => {
  const products = [{ id: 1, name: 'Product 1' }]
  cache[req.url] = products // Cache the response data
  res.json(products) // Send the response
})
app.use('/api', router) // Apply the router to routes starting with "/api"


app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
Eg 3 Caching Data for Routes
Problem Definition: To implement a simple caching mechanism at the router level for a /products route.

// Simple in-memory cache object
const cache = {}
// Router-level middleware to cache data for "/products" routes
router.use('/products', (req, res, next) => {
  if (cache[req.url]) { // Check if the request URL is cached
    return res.json(cache[req.url]) // Serve cached data
  }
  next() // Continue to the next handler if no cache exists
})
router.get('/products', (req, res) => {
  const products = [{ id: 1, name: 'Product 1' }]
  cache[req.url] = products // Cache the response data
  res.json(products) // Send the response
})
app.use('/api', router) // Apply the router to routes starting with "/api"

/*
    Steps to Execute:
    >node server
    Open Postman and send a GET request to `http://localhost:8080/api/products`.
    The first request will fetch and cache the data. Subsequent requests (if any) will serve the cached data.
*/
