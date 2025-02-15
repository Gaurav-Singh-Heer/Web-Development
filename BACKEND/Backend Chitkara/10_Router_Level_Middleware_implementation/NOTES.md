## [Link to Resource](https://shorturl.at/G2IAP)

## Dates
- **29 Jan 2025**
- **30 Jan 2025**
- **5 Feb 2025**

## G17 BEE
### Middlewares (Deep Dive)

---

# Middleware Deep Dive (For Practice, Applications out of scope currently)

## 1. Application-level Middleware

### Initialize Project
```sh
npm init -y
```

### Download Express Module
```sh
yarn add express --save
```

### Define Port and Import Express
```javascript
const port = 8080;
const express = require('express'); // Express library for creating the server
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### Eg 1: Logging Incoming Requests
**Problem Definition:** Demonstrate how to log HTTP method and URL for each incoming request using application-level middleware.

```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Log the request method and URL
  next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

**Steps to Execute:**
1. Run `node server`
2. Open a browser or Postman and navigate to `http://localhost:8080/`.
3. Check your terminal to see the HTTP method and URL being logged for the request.

---

### Eg 2: Setting a Custom Header for All Responses
**Problem Definition:** Set a custom header (`X-Powered-By`) for every HTTP response using application-level middleware.

```javascript
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express'); // Set custom header
  next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

**Steps to Execute:**
1. Run `node server`
2. Open a browser or Postman and navigate to `http://localhost:8080/`.
3. Inspect the response headers in the browser's developer tools or Postman to see the `X-Powered-By: Express` header.

---

### Eg 3: Authentication for All Routes
**Problem Definition:** Add a basic authentication middleware for all routes, blocking access if no Authorization header is provided.

```javascript
app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send('Forbidden');
    }
    next();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```

**Steps to Execute:**
1. Run `node server`
2. Open Postman and make a GET request to `http://localhost:8080/`.
3. Without an `Authorization` header, the response should be `403 Forbidden`.
4. Add an `Authorization` header to see a successful response.

---

### Eg 4: Request Body Parsing
**Problem Definition:** Use application-level middleware to parse incoming JSON request bodies.

```javascript
app.use(express.json());

app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});
```

**Steps to Execute:**
1. Run `node server`
2. Open Postman, set the request method to `POST`, and use the URL `http://localhost:8080/`.
3. In the "Body" section, select `raw`, choose `JSON`, and add data like:
   ```json
   {
       "name": "Chitkara University",
       "department": "CSE"
   }
   ```

---

## 2. Router-level Middleware

### Initialize Project
```sh
npm init -y
```

### Download Express Module
```sh
yarn add express --save
```

### Define Port and Import Express
```javascript
const port = 8080;
const express = require('express');
const app = express();
const router = express.Router();

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

### Eg 1: Logging Requests to Specific Routes
**Problem Definition:** Apply router-level middleware to log requests to specific routes (e.g., `/api/users`).

```javascript
router.use((req, res, next) => {
  console.log('Request to /api route:', req.method, req.url);
  next();
});

router.get('/users', (req, res) => {
  res.send('User list');
});

app.use('/api', router);
```

**Steps to Execute:**
1. Run `node server`
2. Open Postman or your browser and navigate to `http://localhost:8080/api/users`.
3. Check your terminal for the log output of the HTTP request.

---

### Eg 2: Authorization for User Routes
**Problem Definition:** Implement route-specific authentication for routes related to users.

```javascript
router.use('/users', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
});

router.get('/users', (req, res) => {
  res.send('User list');
});

app.use('/api', router);
```

**Steps to Execute:**
1. Run `node server`
2. Open Postman and navigate to `http://localhost:8080/api/users`.
3. Without authentication, you’ll get a `401 Unauthorized` response.

---

## 3. Error-handling Middleware

### Initialize Project
```sh
npm init -y
```

### Download Express Module
```sh
yarn add express --save
```

### Define Port and Import Express
```javascript
const port = 8080;
const express = require('express');
const app = express();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

### Eg 1: Basic Error Handling Middleware
**Problem Definition:** The server might encounter unexpected errors, so we need to handle them gracefully.

```javascript
app.get('/', (req, res, next) => {
    const error = new Error('Something went wrong');
    next(error);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});
```

**Steps to Execute:**
1. Run `node server`
2. Visit `http://localhost:8080/` to simulate the error.

