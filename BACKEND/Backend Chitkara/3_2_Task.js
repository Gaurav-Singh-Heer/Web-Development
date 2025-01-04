const http = require('http')

function handleError(res, errorCode, message) {
    res.statusCode = errorCode
    res.write(message)
    res.end()
}

const server = http.createServer((req, res) => {
    // Set the response header indicating the content type is JSON
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    //GET method
    if (req.method == 'GET') {
        if (req.url == '/')
            res.end('Default get request')
        else if (req.url == '/home')
            res.end('Homepage Display')
        else
            handleError(res, 404, 'Route not found')
    }
    //POST method
    else if (req.method == 'POST') {
        if (req.url == '/')
            res.end('Default post request')
        else if (req.url == '/login')
            res.end('Login post request')
        else
            handleError(res, 404, 'Route not found')
    }
    else
        handleError(res, 404, 'Invalid Method')
    res.end()
})

const PORT = 8080
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
