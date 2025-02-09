// Import required modules
const http = require('http')
const fs = require('fs')
const path = require('path')

// Create an HTTP server
const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname,'public','index.html')
    console.log('Path:- ',__dirname)                    //?
    console.log('Base name',path.basename(__dirname))   //?
    console.log('Resolve:- ',path.resolve(filePath))    //?
    fs.readFile(filePath, (err, data) => {
        if (err)
            console.log(err)
        else
            res.write(data)
        res.end()
    })
})

// Specify the port and start the server
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
