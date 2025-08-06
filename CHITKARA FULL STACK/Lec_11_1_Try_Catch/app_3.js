const http = require('http')
const server = http.createServer((req, res) =>{
    res.end('Hello World')
})

server.listen(3000, ()=>{
    console.log('Server running on port 3000');    
})

process.on('SIGINT', ()=>{
    console.log('Received SIGINT. Closing server...');
    server.close(()=>{
        console.log('Server closed');
        process.exit()
    })
})