// Import the 'http', 'querystring', and 'fs' modules
const http = require('http')
const qs = require('querystring')
const fs = require('fs')

// Read HTML files using fs
const homePage = fs.readFileSync('3_3_Home.html', 'utf-8')
const loginPage = fs.readFileSync('3_3_Login.html', 'utf-8')

// Handle errors
function handleError(res, errorCode, message) {
    res.statusCode = errorCode
    res.write(message)
    res.end()
}

// Create HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/html')
    res.statusCode = 200

    // Log the incoming request to see headers
    console.log(`Request method: ${req.method} | URL: ${req.url}`)

    // GET method
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.write(homePage)  // Serve home page
            res.end()
        } else if (req.url === '/login') {
            res.write(loginPage)  // Serve login page
            res.end()
        } else {
            handleError(res, 404, 'Route not found')
        }
    }
    // POST method
    else if (req.method === 'POST') {
        if (req.url === '/') {
            res.write('Default post request')
            res.end()
        } else if (req.url === '/login') {
            let body = ''

            // Listen to post parameters
            req.on('data', (data) => {
                body += data
            })

            // End callback to node engine
            req.on('end', () => {
                // Log the body to see what data is being received
                console.log('Received Body:', body)

                // Parse the form data
                let obj = qs.parse(body)
                console.log('Parsed Object:', obj)  // Check if we are parsing correctly

                // Extract username and password
                let uname = obj.uname
                let upwd = obj.upwd

                // Basic validation
                if (uname === 'admin' && upwd === 'admin') {
                    res.write("<h1 style='color:green'> Login Success </h1>")
                } else {
                    res.write("<h1 style='color:red'> Login Failed </h1>")
                }
                res.end()
            })

        } else {
            handleError(res, 404, 'Route not found')
        }
    }
    else {
        handleError(res, 404, 'Invalid Method')
    }
})

const PORT = 8081
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})
