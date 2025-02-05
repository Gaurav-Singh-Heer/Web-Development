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

app.use(router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


/*
You need to send more than 5 requests (since RATE_LIMIT = 5) to http://localhost:8080/api/.

Using Postman:
Open Postman.
Select GET request.
Enter the URL:
http://localhost:8080/api/
Click Send 5 times → You will get "Data accessed" as a response.
On the 6th request, you should receive:
429 Too many requests, please wait 30 seconds
*/