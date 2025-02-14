const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const apiRoutes = require('./routes/apiRoutes')  // Routing middleware
const loggerMiddleware = require('./logger/logger')  // Application-level middleware

const app = express()
// Set the port as 8080
const PORT = 8080

app.use(morgan('tiny'))  // Log every request to the console
app.use(helmet())  // Add security headers
app.use(cors())  // Enable CORS for all requests
app.use(loggerMiddleware)  // Custom logging middleware

// Set EJS as the view engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'ejs'))  // Point to the ejs folder

// Built-in middleware for parsing JSON bodies
app.use(bodyParser.json())

// Serve static files (HTML, CSS, JS) from 'public' folder
app.use(express.static(path.join(__dirname, 'public')))

// Routing middleware: routes are in a separate file
app.use('/api', apiRoutes)

// Route to render index.ejs
app.get('/', (req, res) => {
    res.render('index')  // This renders the EJS file
})

// Error handling middleware for 404 (not found)
app.use((req, res, next) => {
    res.status(404).send('Page not found')
})

// Global error handler for unexpected issues
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
})

// Start the server on the specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
