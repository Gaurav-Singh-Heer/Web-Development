const http = require('http')

//handle the errors
function handleError(res, errorCode, message) {
    res.statusCode = errorCode
    res.write(message)
    res.end()
}

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set the response header indicating the content type is JSON
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    //GET method
    if (req.method == 'GET') {
        if (req.url == '/')
            res.write('Default get request')
        else if (req.url == '/login')
            res.write('Login get request')
        else
            handleError(res, 404, 'Route not found')
    }
    //POST method
    else if (req.method == 'POST') {
        if (req.url == '/')
            res.write('Default post request')
        else if (req.url == '/login')
            res.write('Login post request')
        else
            handleError(res, 404, 'Route not found')
    }
    else
        handleError(res, 404, 'Invalid Method')
    res.end()
})

// Start the server on port 8080
const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
