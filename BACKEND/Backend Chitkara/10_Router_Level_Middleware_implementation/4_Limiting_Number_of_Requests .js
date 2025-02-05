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

let requestCount = 0
const RATE_LIMIT = 5
// Router-level middleware to limit requests for "/api" routes
router.use((req, res, next) => {
  requestCount++ // Increment request counter
  if (requestCount > RATE_LIMIT) { // Check if the rate limit is exceeded
    return res.status(429).send('Too many requests') // Respond with Too many requests
  }
  next() // Continue to the next handler
})
router.get('/api/', (req, res) => {
  res.send('Data accessed')
})
app.use(router) // Apply the router

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

/*
Eg 4 Limiting Number of Requests 
Problem Definition: implement rate limiting for a /data route, allowing a limited number of requests.

let requestCount = 0
const RATE_LIMIT = 5
// Router-level middleware to limit requests for "/api" routes
router.use((req, res, next) => {
  requestCount++ // Increment request counter
  if (requestCount > RATE_LIMIT) { // Check if the rate limit is exceeded
    return res.status(429).send('Too many requests') // Respond with Too many requests
  }
  next() // Continue to the next handler
})
router.get('/api/', (req, res) => {
  res.send('Data accessed')
})
app.use(router) // Apply the router

/*
    Steps to Execute:
    >node server
    Open Postman and send multiple GET requests to `http://localhost:8080/api/`.
    After reaching the rate limit (5 requests), you will receive a `429 Too many requests` response.
*/


/*
You need to send more than 5 requests (since RATE_LIMIT = 5) to http://localhost:8080/api/.

Using Postman:
Open Postman.
Select GET request.
Enter the URL:
http://localhost:8080/api/
Click Send 5 times → You will get "Data accessed" as a response.
On the 6th request, you should receive:
429 Too Many Requests
*/