const express = require("express");
const fs = require("fs");
const status = require("express-status-monitor");

const app = express();
const PORT = 8000;

app.use(status());

app.get("/", (req,res) =>{
    const stream = fs.createReadStream("./test_content.txt", "utf-8");                               // To read File Stream by Stream
    stream.on('data', (chunk) => res.write(chunk))    // as chunk come will send chunk in response
    stream.on('end', (chunk) => res.end());       // When stream will end work is done
    /*fs.readFile("./test_content.txt",(err, data) => {
        res.end(data);
    })*/
})

app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
})