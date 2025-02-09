// Import the express module
const express = require('express')
// Create an Express application
const app = express()
// Serve static files from the 'public' directory
app.use(express.static('public'))
// Define a route to handle a basic request to the root of the app
app.get("/", (req, res) => {
    res.send("Welcome to the static files server!")
})
// Start the server and listen on port 8080
const port = 8080
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
