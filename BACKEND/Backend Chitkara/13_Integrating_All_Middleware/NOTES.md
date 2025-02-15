[G17 BEE - Middlewares (All together)](https://shorturl.at/G2IAP)

  6 Feb 2025
12 Feb 2025


## Requirement

### Static Files Handling
The server serves static files from the `/public` folder (HTML, CSS, JS). The `index.html` file is the entry point that users can interact with through their browser.

### Routing
The `/api` routes handle requests:
- **GET** `/api/greet/:name`: Greets the user with their name.
- **POST** `/api/echo`: Echoes back any message sent in the body.
- **GET** `/api/random`: Returns a random number between 1 and 100.

### Middleware
- **loggerMiddleware**: Logs the request timestamp for every request.
- Third-party middlewares like `morgan`, `helmet`, and `cors` are applied for logging, security, and CORS handling respectively.

### Frontend Interaction
- Users can input their name to get a personalized greeting, request a random number, or echo a message.
- Each action makes an API call to the backend, and the result is displayed in the `#response` section.

### Exception Handling
- 404 handler for unknown routes and a global error handler to manage unexpected issues.

## Project Structure
```
/public
  /styles
    - style.css
  /js
    - script.js
  - index.html
/routes
  - apiRoutes.js
/logger
  - logger.js
- server.js
```

## Initialize the Project
```sh
npm init -y
```

## Download the Modules
```sh
yarn add express morgan helmet cors body-parser --save
```

## Logger Middleware
```javascript
// logger/logger.js
module.exports = (req, res, next) => {
    console.log(`Request received at: ${new Date().toISOString()}`)
    next()
}
```

## API Routes
```javascript
// routes/apiRoutes.js
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' })
})

router.get('/greet/:name', (req, res) => {
    const name = req.params.name
    res.json({ message: `Hello, ${name}` })
})

router.post('/echo', (req, res) => {
    const data = req.body
    res.json({ message: 'Here is your data', data })
})

router.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    res.json({ randomNumber })
})

module.exports = router
```

## Server Configuration
```javascript
// server.js
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const loggerMiddleware = require('./logger/logger')
const apiRoutes = require('./routes/apiRoutes')

const app = express()
const PORT = 8080

app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())
app.use(loggerMiddleware)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api', apiRoutes)

app.use((req, res, next) => {
    res.status(404).send('Page not found')
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
```

## Testing with Postman
### a. GET Request to `/api`
```json
{
  "message": "Welcome to the API"
}
```

### b. GET Request to `/api/greet/:name`
```json
{
  "message": "Hello, students"
}
```

### c. POST Request to `/api/echo`
```json
{
  "message": "Here is your data",
  "data": {
    "University": "Chitkara",
    "Dept": "CSE"
  }
}
```

### d. GET Request to `/api/random`
```json
{
  "randomNumber": 42
}
```

## Error Handling
- **404 Error:** Page not found
- **500 Error:** Something went wrong!

[Testing Middlewares all together (Video Link)](https://shorturl.at/ouszF)

## Frontend (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive API</title>
    <link rel="stylesheet" href="styles/style.css">
</head>
<body>
    <div class="container">
        <h1>Welcome to the Interactive API</h1>
        <div id="response"></div>

        <section>
            <h2>Greet User</h2>
            <input type="text" id="nameInput" placeholder="Enter your name">
            <button onclick="greetUser()">Greet</button>
        </section>

        <section>
            <h2>Get Random Number</h2>
            <button onclick="getRandomNumber()">Get Random Number</button>
        </section>

        <section>
            <h2>Echo Your Message</h2>
            <textarea id="echoInput" placeholder="Write something to echo"></textarea>
            <button onclick="echoMessage()">Echo</button>
        </section>
    </div>
    <script src="./js/script.js"></script>
</body>
</html>
```

## Frontend JavaScript
```javascript
// public/js/script.js
async function greetUser() {
    const name = document.getElementById('nameInput').value
    const response = await fetch(`http://localhost:8080/api/greet/${name}`)
    const data = await response.json()
    document.getElementById('response').textContent = data.message
}

async function getRandomNumber() {
    const response = await fetch('http://localhost:8080/api/random')
    const data = await response.json()
    document.getElementById('response').textContent = `Random Number: ${data.randomNumber}`
}

async function echoMessage() {
    const message = document.getElementById('echoInput').value
    const response = await fetch('http://localhost:8080/api/echo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    })
    const data = await response.json()
    document.getElementById('response').textContent = `${data.message}: ${JSON.stringify(data.data)}`
}
```

## CSS Styling
```css
body { font-family: Arial, sans-serif; background-color: #f4f4f4; }
.container { width: 80%; margin: 0 auto; padding: 20px; }
h1 { text-align: center; color: #2c3e50; }
```

---
