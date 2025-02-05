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

app.get('/', (req, res) => {
    res.send('Home Route') // Respond with a message for valid requests
})
// 404 Error-handling middleware (handles non-existing routes)
app.use((req, res, next) => {
    res.status(404).send('Page not found') // Respond with 404 for invalid URLs
})


app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

/*
Eg 2 404 Error Handling Middleware
Problem Definition: If a route is not found, the server should return a 404 error.
// Define a valid route for "/"
app.get('/', (req, res) => {
    res.send('Home Route') // Respond with a message for valid requests
})
// 404 Error-handling middleware (handles non-existing routes)
app.use((req, res, next) => {
    res.status(404).send('Page not found') // Respond with 404 for invalid URLs
})


/*
    Steps to Execute:
    >node server
    in postman
        Visit http://localhost:8080/ for the valid route
        Visit http://localhost:8080/invalid-route for a 404 error
*/
