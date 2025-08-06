const express = require('express')
const app = express()
const studentRoutes = require('./routes/students')

app.use(express.json())
app.use('/api/students', studentRoutes)

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

// http://localhost:3000/api/students