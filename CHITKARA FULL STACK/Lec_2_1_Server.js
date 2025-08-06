const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });  
    res.write("Hello from server!");                       
    res.end();                                             
}).listen(80, () => {               // By writing Port 80 it wouldn't show port no at URL in browser as http by default has port no. 80
    console.log('Server running on port 80');            
});
