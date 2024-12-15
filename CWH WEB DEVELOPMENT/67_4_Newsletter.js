const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./67_Newsletter/index.html');
const news = fs.readFileSync('./67_Newsletter/gallery.html');

const server = http.createServer((req, res) => {
    const url = req.url;  // Get the URL from the request
    console.log(url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.end(home);
    } else if (url === '/news') {
        res.end(news);
    } else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1>');  // Handle any other undefined routes
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
