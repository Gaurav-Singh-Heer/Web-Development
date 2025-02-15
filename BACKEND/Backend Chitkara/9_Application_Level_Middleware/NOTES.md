

```markdown
 
G17 BEE
-	Middlewares (Deep Dive)
 
=================================================

# Middleware Deep Dive (For Practice, Applications out of scope currently)

## 1. Application-level Middleware

### Project Initialization
```sh
# Initialize project
npm init -y

# Download express module
yarn add express --save
```

### Define Port and Import Express
```javascript
// Define port
const port = 8080;

// Import the express module
const express = require('express'); // Express library for creating the server

// Create REST object
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

---

## Example 1: Logging Incoming Requests
### Problem Definition:  
Demonstrate logging HTTP method and URL for each incoming request using application-level middleware.

```javascript
// Application-level middleware to log the HTTP method and URL of each incoming request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`); // Log the request method and URL
  next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!'); // Respond with 'Hello, World!' when the root URL is accessed
});
```

#### Steps to Execute:
1. Run the server:
   ```sh
   node server
   ```
2. Open a browser or Postman and navigate to `http://localhost:8080/`.
3. Check your terminal to see the HTTP method and URL being logged for the request.

---

## Example 2: Setting a Custom Header for All Responses
### Problem Definition:  
Set a custom header (`X-Powered-By`) for every HTTP response using application-level middleware.

```javascript
// Application-level middleware to set a custom header for all responses
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express'); // Set custom header 'X-Powered-By'
  next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```

#### Steps to Execute:
1. Run the server:
   ```sh
   node server
   ```
2. Open a browser or Postman and navigate to `http://localhost:8080/`.
3. Inspect the response headers in the browser's developer tools or in Postman to see the `X-Powered-By: Express` header.

---

## Example 3: Authentication for All Routes
### Problem Definition:  
Add a basic authentication middleware for all routes, blocking access if no `Authorization` header is provided.

```javascript
// Application-level middleware to require authentication for all routes
app.use((req, res, next) => {
    if (!req.headers.authorization) { // Check if authorization header exists
        return res.status(403).send('Forbidden'); // Respond with Forbidden if no authorization
    }
    next(); // Pass control to the next middleware or route handler
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
```

#### Steps to Execute:
1. Run the server:
   ```sh
   node server
   ```
2. Open Postman and make a GET request to `http://localhost:8080/`.
   - Without any `Authorization` header, the response should be `403 Forbidden`.
   - Add an `Authorization` header with any value to see the successful response.

---

## Example 4: Request Body Parsing
### Problem Definition:  
Use application-level middleware to parse incoming JSON request bodies.

```javascript
// Application-level middleware to parse incoming JSON request bodies
app.use(express.json()); // Parse JSON body

app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`); // Respond with received data
});
```

#### Steps to Execute:
1. Run the server:
   ```sh
   node server
   ```
2. Open Postman, set the request method to `POST`, and use the URL `http://localhost:8080/`.
3. In the "Body" section, select `raw`, choose `JSON`, and add data like:
   ```json
   {
       "name": "Chitkara University",
       "department": "CSE"
   }
   ```

---
```