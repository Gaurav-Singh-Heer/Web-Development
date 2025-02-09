//import http module
let http = require('http')
//import querystring module
let qs = require('querystring')
let server = http.createServer((req, res) => {
    //set MIME type
    res.writeHead(200, { 'content-type': 'text/html' })
    //listen to post parameters
    let body = ''
    req.on('data', (result) => {
        body = body + result
    })
    //end callback to node engine
    req.on('end', () => {
        let obj = qs.parse(body)
        let uname = obj.uname
        let upwd = obj.upwd
        if (uname === 'admin' && upwd === 'admin')
            res.write("<h1 style = 'color:green'> Login Success </h1>")
        else
            res.write("<h1 style = 'color:red'> Login Failed </h1>")
        res.end()
    })
})
//assign port no
server.listen(8080)
console.log('Server listenig port no 8080')


