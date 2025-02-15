### [Reference Link](https://shorturl.at/G2IAP)  
**29 Jan 2025 - 30 Jan 2025**  
**5 Feb 2025**  

## G17 BEE  
### Middlewares (Deep Dive)  

---  
## Middleware Deep Dive (For Practice, Applications out of scope currently)  

### 1. Application-level Middleware  

#### Initialize Project  
```bash
npm init -y
# Install express module
yarn add express --save
```

#### Define Port and Setup Express  
```javascript
const port = 8080;
const express = require('express');
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### Example 1: Logging Incoming Requests  
**Problem Definition:** Log HTTP method and URL for each incoming request.  
```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```
**Steps to Execute:**  
1. Run `node server`
2. Open browser/Postman: `http://localhost:8080/`
3. Check terminal for logs.  

#### Example 2: Setting a Custom Header for All Responses  
**Problem Definition:** Set custom header `X-Powered-By` for every response.  
```javascript
app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Express');
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
```
**Steps to Execute:**  
1. Run `node server`
2. Check response headers in browser/Postman.  

#### Example 3: Authentication for All Routes  
**Problem Definition:** Block access if no Authorization header is provided.  
```javascript
app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send('Forbidden');
    }
    next();
});
```
**Steps to Execute:**  
1. Run `node server`
2. Make a GET request with/without `Authorization` header.  

#### Example 4: Request Body Parsing  
**Problem Definition:** Parse incoming JSON request bodies.  
```javascript
app.use(express.json());

app.post('/', (req, res) => {
  res.send(`Received data: ${JSON.stringify(req.body)}`);
});
```

---  
## 2. Router-level Middleware  

#### Initialize Project  
```bash
npm init -y
yarn add express --save
```

#### Define Port and Setup Router  
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

#### Example 1: Logging Requests to Specific Routes  
```javascript
router.use((req, res, next) => {
  console.log('Request to /api route:', req.method, req.url);
  next();
});
router.get('/users', (req, res) => {
  res.send('User list');
});
```

#### Example 2: Authorization for User Routes  
```javascript
router.use('/users', (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized');
  }
  next();
});
```

#### Example 3: Caching Data for Routes  
```javascript
const cache = {};
router.use('/products', (req, res, next) => {
  if (cache[req.url]) {
    return res.json(cache[req.url]);
  }
  next();
});
```

#### Example 4: Limiting Number of Requests  
```javascript
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

---  
## 3. Error-handling Middleware  

#### Example 1: Basic Error Handling Middleware  
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

#### Example 2: 404 Error Handling Middleware  
```javascript
app.use((req, res, next) => {
  res.status(404).send('Page Not Found');
});
```

