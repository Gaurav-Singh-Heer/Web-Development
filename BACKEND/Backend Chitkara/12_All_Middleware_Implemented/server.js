// importing modules
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('bodyParser');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');
const loggerMiddleware = require('./logger/logger'); // Application Level Middleware
const apiRoutes = require('./routes/apiRoutes');     // Routing Middleware

const app = express();

const PORT = 8080;

// How will you use the 3rd Party Middleware
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

app.use(loggerMiddleware);

app.use(bodyParser.json());

/*
// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')))
*/

// Routing middleware: routes are in a seperate file
app.use('/api', apiRoutes);

app.use((req, res, next)=>{
    res.status(404).send('Page Not Found');
})

// Global error handler for unexpected issues

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('Something went Wrong');
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    console.log(`http://localhost:${PORT}/`)
})