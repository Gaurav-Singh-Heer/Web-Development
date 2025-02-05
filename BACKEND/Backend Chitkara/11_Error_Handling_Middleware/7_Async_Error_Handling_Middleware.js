const port = 8080;
const express = require('express');

const app = express();
const router = express.Router();

let requestCount = 0;
const RATE_LIMIT = 5;
const TIME_WINDOW = 30 * 1000; // 30 seconds
let isBlocked = false;

// Function to start a cooldown timer when the limit is exceeded
const startCooldownTimer = () => {
  isBlocked = true; // Block further requests
  setTimeout(() => {
    requestCount = 0; // Reset request count
    isBlocked = false; // Allow new requests
  }, TIME_WINDOW);
};

// Rate limiting middleware
router.use('/api', (req, res, next) => {
  if (isBlocked) {
    return res.status(429).send(`Too many requests, please wait ${TIME_WINDOW / 1000} seconds`);
  }
  if (requestCount >= RATE_LIMIT) {
    startCooldownTimer(); // Start cooldown timer
    return res.status(429).send(`Too many requests, please wait ${TIME_WINDOW / 1000} seconds`);
  }
  requestCount++;
  next();
});

// Routes
router.get('/users', (req, res) => {
  res.send('User list');
});

router.get('/api/', (req, res) => {
  res.send('Data accessed');
});

app.get('/', async (req, res, next) => {
    try {
        // Simulating an asynchronous operation that throws an error
        const result = await Promise.reject('Something went wrong')
        res.send(result)
    } catch (error) {
        next(error) // Pass the error to the error-handling middleware
    }
})
// Error-handling middleware for catching async errors
// Logs the error and sends a 500 status response
app.use((err, req, res, next) => {
    console.error(err) // Log the error for debugging
    res.status(500).send('Internal Server Error') // Respond with a 500 status code
})

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
Eg 3 Async Error Handling Middleware
Problem Definition: Handling asynchronous errors, such as those in promises or async functions.
// Async route that might throw an error
// Simulating an asynchronous operation that throws an error
app.get('/', async (req, res, next) => {
    try {
        // Simulating an asynchronous operation that throws an error
        const result = await Promise.reject('Something went wrong')
        res.send(result)
    } catch (error) {
        next(error) // Pass the error to the error-handling middleware
    }
})
// Error-handling middleware for catching async errors
// Logs the error and sends a 500 status response
app.use((err, req, res, next) => {
    console.error(err) // Log the error for debugging
    res.status(500).send('Internal Server Error') // Respond with a 500 status code
})


/*
    Steps to Execute:
    >node server
    Visit http://localhost:8080/ to trigger the async error
*/

