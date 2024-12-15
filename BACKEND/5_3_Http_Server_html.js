let http = require('http');

let server = http.createServer((req, res) => {
    // Set MIME type
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(`
        <html>
            <head>
                <title>Gaurav ka Server</title>
            </head>
        <style>
            body{
                background-color: black;
                // color: red;
            }
            h1{
                margin:2rem 1rem;
                text-shadow:  0px 0px 2px red;
            }
        </style>
            <body>
                <h1>Gaurav Singh Heer</h1>
            </body>
        </html>
    `); 
    res.end(); // To stop that rotation in the title bar of the server
});

// Assign port number
server.listen(8080);
console.log("Server listening on port no 8080");
