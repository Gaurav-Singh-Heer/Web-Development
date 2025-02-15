# [Express.js Framework - Introduction]

## [15 Jan 2025]

### G17 BEE  
#### Frameworks in Node.js  
- Express Introduction  
- Serving Static files in Express  
- Updated with Video recordings  

---

## Frameworks of Node.js

---

## Express.js

### Overview
- **Type:** Minimalist and flexible
- **Description:** Express.js is one of the most widely used frameworks in the Node.js ecosystem. It is minimal, unopinionated, and provides a simple API to build robust web applications and APIs. Express handles routing, middleware, template engines, and much more.
- **Use Cases:** Ideal for building RESTful APIs, single-page applications (SPAs), and server-side applications.

### Key Features:
- Simple routing
- Middleware support
- Template engine support (e.g., EJS, Pug)
- Robust routing system
- Extensible with many third-party packages

---

## Response Methods in Express

| Method         | Purpose                                        | Common Use Cases |
|---------------|----------------------------------------------|------------------|
| `res.send()`  | Sends a generic response (string, object, or buffer). | Sending text, JSON, or binary data. |
| `res.json()`  | Sends a JSON response. | Returning JSON data in APIs. |
| `res.jsonp()` | Sends a JSONP response. | Supporting cross-origin requests. |
| `res.sendFile()` | Sends a file as the response. | Serving static files like HTML, images, PDFs, etc. |
| `res.status()` | Sets the HTTP status code. | Indicating the success or failure of the request. |
| `res.redirect()` | Sends an HTTP redirect response. | Redirecting to another URL. |
| `res.render()` | Renders a view and sends the HTML output. | Rendering dynamic HTML views using a templating engine. |
| `res.set()` | Sets HTTP headers. | Customizing response headers (e.g., for caching or content type). |
| `res.type()` | Sets the Content-Type header. | Setting content type shorthand (e.g., JSON, HTML). |
| `res.sendStatus()` | Sends a status code with a default message. | Sending just a status code (e.g., 404 Not Found). |
| `res.location()` | Sets the Location header (often with 3xx/201 responses). | Indicating the URI of a new or redirected resource. |
| `res.vary()` | Sets the Vary header. | Indicating response variations based on request headers. |

---

## Example

### Initialize Project
```sh
npm init -y
```

### Download Express Module
```sh
yarn add express --save
```

### Import Express Module and Create Server
```javascript
const express = require('express');
const app = express(); // REST object

// Create GET request
app.get("/", (req, res) => {
    console.log('Default get message');
    res.json({'message':'default get request'});
});

// Create another GET request
app.get("/fetch", (req, res) => {
    res.send({ 'message': 'fetch get request' });
});

// Create POST request
app.post("/", (req, res) => {
    res.send({ 'message': 'default post request' });
});

// Create another POST request
app.post("/login", (req, res) => {
    res.send({ 'message': 'login post request' });
});

// Create a port
const port = 8080;

// Assign port number
app.listen(port, () => {
    console.log('Server listening on port', port);
});
```

### Test URLs with Postman
```plaintext
http://localhost:8080           (Default GET)
http://localhost:8080/fetch     (fetch GET)
http://localhost:8080           (Default POST)
http://localhost:8080/login     (login POST)
```

[07_01 Express Server](https://shorturl.at/G2IAP)

---

## Serving Static Files in Express

### `static()` Function
- `static()` is a predefined function from Express.
- This function is used to set the target directory.
- The argument to this function is a path.

### Directory Structure
```
public
  ├── notes.txt
  ├── index.html
server.js
```

### `notes.txt`
```
These are the important notes of Node.js.
```

### `index.html`
```html
<!DOCTYPE html>
<html>
<head>
    <title>Express Static</title>
    <link rel="icon" href="https://expressjs.com/images/favicon.png" type="image/x-icon">
</head>
<body>
    <h1 style="color: red;">Welcome to static files in express</h1>
</body>
</html>
```

### `server.js`
```javascript
// Import the Express module
const express = require('express');

// Create an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to handle a basic request to the root of the app
app.get("/", (req, res) => {
    res.send("Welcome to the static files server!");
});

// Start the server and listen on port 8080
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
```

[07_02 Serving Static Files in Express](https://shorturl.at/kdEbl)

