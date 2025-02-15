# [G17 BEE - Middlewares](https://shorturl.at/G2IAP)  
**Date:** 22 Jan 2025  

## Middleware  

### What is Middleware in Express?  
Middleware in Express is a function that processes a request before it reaches the route handler, or processes the response before it is sent back to the client.  

These functions have access to three core objects:  
1. **req (Request Object):** Contains data about the incoming request (e.g., URL, query parameters, headers, body).  
2. **res (Response Object):** Allows the middleware to modify the outgoing response (e.g., setting status codes, sending a response body).  
3. **next (Function):** A callback that passes control to the next middleware function in the stack. If you don’t call `next()`, the request-response cycle will be halted.  

---

## Middleware Lifecycle  
- The Express middleware lifecycle is a sequence of steps through which HTTP requests pass as they are processed by the server.  
- Each middleware function is executed in the order it is defined, with each function having access to `req` (request), `res` (response), and `next()` (to pass control).  

### Steps:  
1. **Request Reception**  
   - When a request is made, it first enters the server and is sent to the first middleware function.  
2. **Middleware Execution**  
   - Middleware functions execute in the order they are defined. Each middleware can access `req`, `res`, and must call `next()` to continue execution.  
3. **Routing Middleware**  
   - Express checks if a matching route exists (e.g., `GET /users`).  
   - If no route matches, a 404 error middleware is triggered.  
4. **Response Sent**  
   - Once the middleware chain completes, the server sends the response.  
5. **Error Handling**  
   - Errors are handled via error-handling middleware (`err, req, res, next`).  

---

## Types of Middlewares  

### Application-Level Middleware  
Applies globally or to specific routes using `app.use()`.  

```javascript
// Importing the express module
const express = require('express')

// Creating an express application instance
const app = express()

// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req, res, next) => {
  console.log('inside middleware')
  console.log(`${req.method} ${req.url}`) // Log the request method and URL
  next() // Pass control to the next middleware or route handler
})  

// Route handler for the root URL
app.get('/', (req, res) => {
    console.log('Inside route handler')
    res.send('Hello, World!') // Respond with 'Hello, World!' when the root URL is accessed
})

// Starting the server to listen on port 8080
app.listen(8080, () => {
    console.log('Server is running on port 8080') // Log a message when the server is running
})

// Test URL: http://localhost:8080/
```