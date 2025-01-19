const http = require("http")
const express = require("express");
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 9000;

// Socket.io 

io.on('connection', (socket) => {                                              // means whenever there will a connection from front-end we will get a socket(client) called as socket in socket.io world
    console.log('A new user has connected', socket.id);                        // each socket has an id
});

// HTTP Handle
app.use(express.static(path.resolve('./public')));

// app.get('/', (req,res)=>{
//     res.sendFile('./public/1_index.html')
// })

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "1_index.html")); // Provide an absolute path
});

server.listen(PORT, ()=>console.log(`Server has started at ${PORT}`))