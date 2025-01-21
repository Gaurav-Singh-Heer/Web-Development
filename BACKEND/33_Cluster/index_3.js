const cluster = require('cluster');
const os = require("os")                                  // Used to get count of no of CPU's
const express = require("express")

const totalCPUs = os.cpus().length          // OUTPUT: 8               // OR
// const totalCPUs = os.availableParallelism()          // OUTPUT: 8               
console.log(totalCPUs)
// Making worker threads as the number of CPU(core) present in my system

if (cluster.isPrimary) {                                              // This particular cluster will do work of load Balancing
    console.log(`Primary ${process.pid} is running`);

    // Fork Workers 
    for (let i = 0; i < totalCPUs; i++) {                               // No. of workers = No.of CPUs
        cluster.fork();
    }
}
else{                                                                   // If Not Primary run express Server
    const app = express();
    const PORT = 8000;

    app.get("/", (req,res) =>{
        return res.json({message: `Hello from Express Server ${process.pid}`});
    });
    
    app.listen(PORT, () => {
        console.log(`Server Started at PORT: ${PORT}`)
    })
}