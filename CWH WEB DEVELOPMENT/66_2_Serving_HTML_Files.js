const http = require('http');
const fs = require('fs');

const fileContent = fs.readFileSync('62_Json.html');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });  // Response Code -> 200 (OK)
    res.end(fileContent);
});

server.listen(8000, '127.0.0.1', () => {
    console.log("Listening on port 8000, Open http://127.0.0.1:8000");
});
