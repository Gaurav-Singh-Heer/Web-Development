# [Routing in Express](https://shorturl.at/G2IAP) - 16 Jan 2025

## G17 BEE

### Topics Covered:
- Routing in Express
- Routing Methods
- Route Paths
- Route Parameters
- Route Handlers

---

## Routing in Express
- `module` is the predefined object in Node.js.
- `exports` is the predefined key in the module object.
- `exports` key is used to export (JSON object or function).

### 1. Routing Methods:
- Routing methods define the HTTP method (GET, POST, PUT, DELETE) for a route in Express.

### 2. Route Paths:
- Route paths are the URL patterns used to define a route in Express.
- They can be static (e.g., `/login`) or dynamic, using parameters (e.g., `/user/:id`).

### 3. Route Parameters:
- Route parameters are dynamic placeholders in a route path, prefixed by a colon (`:`), which capture values from the URL.
- They are accessed via `req.params` (e.g., `req.params.id`).

### 4. Route Handlers:
- Route handlers are callback functions that are executed when a request matches a route.
- They handle the request and send a response using `res.send()` or `res.json()`.

---

## Directory Structure
```
login/
  ├── login.js
logout/
  ├── logout.js
server.js
```

### **login.js**
```javascript
// Import Express module
let express = require('express');
// Create router instance
let router = express.Router();

// Create GET request
router.get("/", (req, res) => {
    res.send({ 'message': 'Welcome to Login module' });
});

// Create one more GET request with route parameters
router.get("/login/:uname/:upwd", (req, res) => {
    let uname = req.params.uname;
    let upwd = req.params.upwd;
    
    if (uname === 'admin' && upwd === 'admin') {
        res.json({ 'login': 'success' });
    } else {
        res.json({ 'login': 'failed' });
    }
});

// Export router
module.exports = router;
```

### **logout.js**
```javascript
// Import Express module
let express = require('express');
// Create router instance
let router = express.Router();

// Create GET request
router.get("/", (req, res) => {
    res.json({ 'message': 'Welcome to Logout module' });
});

// Create another GET request using query parameters
// URL: http://localhost:8080/logout/logout?uname=admin&upwd=admin
router.get("/logout", (req, res) => {
    let uname = req.query.uname;
    let upwd = req.query.upwd;
    
    if (uname === 'admin' && upwd === 'admin') {
        res.send({ 'logout': 'Success' });
    } else {
        res.send({ 'logout': 'Failed' });
    }
});

// Export router
module.exports = router;
```

### **server.js**
```javascript
// Import modules
let express = require('express');
let login = require('./login/login');
let logout = require('./logout/logout');

// Create REST object
let app = express();

// Use modules
app.use("/login", login);
app.use("/logout", logout);

// Create port
let port = 8080;

// Assign port number
app.listen(port, () => {
    console.log(`Server running on port no: ${port}`);
});
```

## API Endpoints for Testing:
- [http://localhost:8080/login](http://localhost:8080/login)
- [http://localhost:8080/login/login/admin/admin](http://localhost:8080/login/login/admin/admin)
- [http://localhost:8080/logout](http://localhost:8080/logout)
- [http://localhost:8080/logout/logout?uname=admin&upwd=admin](http://localhost:8080/logout/logout?uname=admin&upwd=admin)

