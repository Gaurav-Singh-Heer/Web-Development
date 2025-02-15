## [Middleware in Express](https://shorturl.at/G2IAP) (23 Jan 2025)

### G17 BEE

## Middlewares

### What is Middleware in Express?
Middleware in Express is a function that processes a request before it reaches the route handler or processes the response before it is sent back to the client. These functions have access to three core objects:

1. **req (Request Object):** Contains data about the incoming request (e.g., URL, query parameters, headers, body).
2. **res (Response Object):** Allows the middleware to modify the outgoing response (e.g., setting status codes, sending a response body).
3. **next (Function):** A callback that passes control to the next middleware function in the stack. If you don’t call `next()`, the request-response cycle will be halted.

---

## Middleware Lifecycle

- The Express middleware lifecycle is a sequence of steps through which HTTP requests pass as they are processed by the server.
- Each middleware function is executed in the order it is defined, with each function having access to `req`, `res`, and a `next()` function to pass control to the next middleware.

### Steps:

1. **Request Reception**
   - When a request is made to the Express application, it first enters the server and is sent to the first middleware function.

2. **Middleware Execution**
   - Middleware functions execute in the order they are defined. Each middleware function has access to `req`, `res`, and `next()`.

3. **Routing Middleware**
   - Express checks if there’s a matching route (like `GET /users`). If no match is found, a 404 error middleware can be triggered.

4. **Response Sent**
   - Once the middleware chain completes, the server sends the response to the client.

5. **Error Handling**
   - If an error occurs, the error-handling middleware (which must have four parameters: `err, req, res, next`) is triggered.

---

## Types of Middlewares

### Application-level Middleware

Middleware applied globally or to specific routes using `app.use()`.

```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Inside middleware');
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  console.log('Inside route handler');
  res.send('Hello, World!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

_Test URL: [http://localhost:8080/](http://localhost:8080/)_

---

### Router-level Middleware

Middleware applied to specific router instances or sub-routes using `router.use()`.

```javascript
const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware');
  next();
});

router.get('/users', (req, res) => {
  res.send('User list');
});

app.use('/api', router);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

_Test URL: [http://localhost:8080/api/users](http://localhost:8080/api/users)_

---

### Error-handling Middleware

Middleware to catch errors and handle them with a custom response.

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  const error = new Error('Something went wrong');
  next(error);
});

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

_Test URLs:_
- Without error: [http://localhost:8080/hello](http://localhost:8080/hello)
- With error: [http://localhost:8080/](http://localhost:8080/)

---

### Third-party Middleware

Middleware created by others to provide extra features like logging and CORS handling.

```javascript
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

_Test URLs:_
- [http://localhost:8080/](http://localhost:8080/)
- [http://localhost:8080/hello](http://localhost:8080/hello)

---

## Comparison Table

| Type of Middleware         | Description                                       | Scope                             | Usage                                      |
|---------------------------|-------------------------------------------------|----------------------------------|--------------------------------------------|
| **Application-level**     | Applied to the entire application               | Global (applies to all routes)  | Logging, authentication, etc.             |
| **Router-level**          | Applied to specific routers/routes               | Specific router/route           | Applying logic only to certain route groups |
| **Error-handling**        | Handles errors centrally                         | Global (at the end of all routes) | Catching and responding to errors (404, 500, etc.) |
| **Third-party**           | Provided by external libraries                   | Application or router level      | Functionality like body parsing, security, logging |

---

