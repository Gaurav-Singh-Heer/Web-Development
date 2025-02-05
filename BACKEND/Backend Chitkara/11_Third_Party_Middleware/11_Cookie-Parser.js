const express = require('express'); // Import Express
const cookieParser = require('cookie-parser'); // Import Cookie Parser

const app = express();
const port = 8080;

// Use cookie-parser middleware to parse cookies from requests
app.use(cookieParser());

// Route to read cookies
app.get('/cookies', (req, res) => {
    const cookies = req.cookies; // Access cookies from request
    res.json({ cookies }); // Respond with JSON containing cookies
});

// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'Username', { httpOnly: true, maxAge: 60000 }); // Securely set a cookie
    res.send('Cookie has been set');
});

// Route to clear a cookie
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('user'); // Clear the 'user' cookie
    res.send('Cookie has been cleared');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


/*
Eg 4 cookie-parser Middleware
Problem Definition: Parse cookies from the incoming requests and make them accessible.
// Use cookie-parser middleware
app.use(cookieParser())


// Route to read cookies
app.get('/cookies', (req, res) => {
    const cookies = req.cookies
    res.json({ cookies })
})


// Route to set a cookie
app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'Username')
    res.send('Cookie has been set')
})


// Route to clear a cookie
app.get('/clear-cookie', (req, res) => {
    res.clearCookie('user') // Clear the 'user' cookie
    res.send('Cookie has been cleared')
})

/*
    Steps to Execute:
    >node server
    Visit http://localhost:8080/set-cookie to set a cookie
    Visit http://localhost:8080/cookies to view the cookies
    Visit http://localhost:8080/clear-cookie to clear the 'user' cookie
*/
