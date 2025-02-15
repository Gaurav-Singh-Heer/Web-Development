### [Click here](https://shorturl.at/G2IAP) - 18 Dec 2024

## G17 BEE
### KickStart with Node.js: [Click here](https://shorturl.at/6DjNO)

---

## Handling Exceptions (Errors)
There are various ways in Node.js to handle exceptions:

- **Synchronous errors**: Use `try-catch` blocks to handle exceptions.
- **Asynchronous errors**: Handle errors in callbacks by checking the first argument (`err`).
- **Global errors**: Use `process.on('uncaughtException')` to handle uncaught exceptions globally.
- **Custom errors**: You can create custom error objects using `Error` and manipulate their properties.

---

## Creating Endpoints
- `method` is a predefined key from the `req` object. It gives the type of method in the request.
- `url` is a predefined key from the `req` object. It gives the URL of the request.
- `setHeader` is a predefined function from the `res` object used to set headers.
- `statusCode` is a predefined key from the `res` object. We can set the status code using this key.
- `handleError` is a user-defined function for handling exceptions (errors).
- Possible errors include:
  - 'Route not found'
  - 'Invalid method'
  - etc.
- If any error occurs, `statusCode` will be `4xx`.

```javascript
// Import the 'http' module
const http = require('http');

// Handle errors
function handleError(res, errorCode, message) {
    res.statusCode = errorCode;
    res.write(message);
    res.end();
}

// Create HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;

    if (req.method === 'GET') {
        if (req.url === '/') res.write('Default GET request');
        else if (req.url === '/login') res.write('Login GET request');
        else handleError(res, 404, 'Route not found');
    }
    else if (req.method === 'POST') {
        if (req.url === '/') res.write('Default POST request');
        else if (req.url === '/login') res.write('Login POST request');
        else handleError(res, 404, 'Route not found');
    }
    else handleError(res, 404, 'Invalid Method');

    res.end();
});

// Start the server on port 8080
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

## Test in Postman

### Task:
1. Create a Node.js server.
2. Display the home page.
3. On the home page, provide two links/buttons:
   - Login
   - Dashboard
4. The dashboard should return an error: "Route not found".
5. On clicking Login, navigate to the `/login` endpoint and return "Login GET request".
6. On the login page, accept a username and password.
7. Authenticate the user and display respective messages.
8. Apply proper styling.

```javascript
// Import the 'http' and 'querystring' modules
const http = require('http');
const qs = require('querystring');

// Handle errors
function handleError(res, errorCode, message) {
    res.statusCode = errorCode;
    res.write(message);
    res.end();
}

// Create HTTP server
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;

    console.log(`Request method: ${req.method} | URL: ${req.url}`);

    if (req.method === 'GET') {
        if (req.url === '/') res.write(homePage);
        else if (req.url === '/login') res.write(loginPage);
        else handleError(res, 404, 'Route not found');
    }
    else if (req.method === 'POST') {
        if (req.url === '/login') {
            let body = '';
            req.on('data', (data) => { body += data; });
            req.on('end', () => {
                console.log('Received Body:', body);
                let obj = qs.parse(body);
                let uname = obj.uname;
                let upwd = obj.upwd;

                if (uname === 'admin' && upwd === 'admin') {
                    res.write("<h1 style='color:green'>Login Success</h1>");
                } else {
                    res.write("<h1 style='color:red'>Login Failed</h1>");
                }
                res.end();
            });
        } else handleError(res, 404, 'Route not found');
    }
    else handleError(res, 404, 'Invalid Method');
});

// Start the server on port 8081
const PORT = 8081;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

## Home Page HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Home Page</title>
</head>
<body class="bg-light">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">Home</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="/dashboard">Dashboard</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container text-center my-5">
        <h1 class="display-4 text-primary mb-4">Welcome to Home</h1>
        <div>
            <a href="/login" class="btn btn-primary btn-lg mx-3">Login</a>
            <a href="/dashboard" class="btn btn-secondary btn-lg mx-3">Dashboard</a>
        </div>
    </div>
</body>
</html>
```

---

## Login Page HTML
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { background: radial-gradient(white, black); font-family: sans-serif; }
        .box { background-color: black; width: 300px; margin: 50px auto; padding: 40px; border-radius: 20px; text-align: center; }
        input { margin: 20px auto; text-align: center; padding: 14px 10px; width: 200px; border-radius: 24px; background: none; }
    </style>
</head>
<body>
    <form action="/login" method="post" class="box">
        <h1>Login Page</h1>
        <input type="text" placeholder="Username" name="uname" required>
        <input type="password" placeholder="Password" name="upwd" required>
        <input type="submit" value="Login">
    </form>
</body>
</html>
```

