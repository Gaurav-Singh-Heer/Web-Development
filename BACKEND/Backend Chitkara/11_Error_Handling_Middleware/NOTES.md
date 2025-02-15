## [Middleware Deep Dive](https://shorturl.at/G2IAP)

### 29 Jan 2025 - 30 Jan 2025

### 5 Feb 2025

## G17 BEE - Middlewares (Deep Dive)

---

## Middleware Deep Dive (For Practice, Applications out of scope currently)

### 1. Application-level Middleware

#### Initialize Project
```sh
npm init -y
```
#### Download Express Module
```sh
yarn add express --save
```
#### Define Port & Setup Express
```js
const port = 8080;
const express = require('express');
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### Example 1: Logging Incoming Requests
```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```
*Steps to Execute:* Run `node server` and check the logs when accessing `http://localhost:8080/`.

#### Example 2: Setting a Custom Header for All Responses
```js
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express');
  next();
});
```
*Steps to Execute:* Check response headers for `X-Powered-By: Express`.

#### Example 3: Authentication for All Routes
```js
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(403).send('Forbidden');
  }
  next();
});
```
*Steps to Execute:* Access without Authorization header returns `403 Forbidden`.

#### Example 4: Request Body Parsing
```js
app.use(express.json());
app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});
```
*Steps to Execute:* Use Postman to send JSON data via POST.

---

### 2. Router-level Middleware

#### Initialize Project & Setup Router
```js
const port = 8080;
const express = require('express');
const app = express();
const router = express.Router();
app.use('/api', router);
```

#### Example 1: Logging Requests to Specific Routes
```js
router.use((req, res, next) => {
  console.log('Request to /api route:', req.method, req.url);
  next();
});
```
*Steps to Execute:* Check terminal logs when hitting `/api/users`.

#### Example 2: Authorization for User Routes
```js
router.use('/users', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
});
```
*Steps to Execute:* Access without Authorization header returns `401 Unauthorized`.

#### Example 3: Caching Data for Routes
```js
const cache = {};
router.use('/products', (req, res, next) => {
  if (cache[req.url]) {
    return res.json(cache[req.url]);
  }
  next();
});
```
*Steps to Execute:* First request caches data; subsequent requests serve cached response.

#### Example 4: Limiting Number of Requests
```js
let requestCount = 0;
const RATE_LIMIT = 5;
router.use((req, res, next) => {
  requestCount++;
  if (requestCount > RATE_LIMIT) {
    return res.status(429).send('Too many requests');
  }
  next();
});
```
*Steps to Execute:* After 5 requests, `429 Too many requests` is returned.

---

### 3. Error-handling Middleware

#### Initialize Project
```sh
npm init -y
yarn add express --save
```
#### Define Port & Setup Express
```js
const port = 8080;
const express = require('express');
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### Example 1: Basic Error Handling Middleware
```js
app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong');
  next(error);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
```
*Steps to Execute:* Access `http://localhost:8080/` to trigger an error.

#### Example 2: 404 Error Handling Middleware
```js
app.use((req, res, next) => {
  res.status(404).send('Page not found');
});
```
*Steps to Execute:* Access an undefined route to trigger a `404 Page not found` response.

