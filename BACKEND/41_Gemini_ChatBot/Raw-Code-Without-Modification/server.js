const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const pageRoutes = require('./routes/pageRoutes');
const authRoutes = require('./routes/authRoutes');
const patientRoutes = require('./routes/patientRoutes');
const sahayakRoutes = require('./routes/sahayakRoutes');

// Server port
const PORT = 3000;

// Create an Express app
const app = express(); 
app.use(cors())//allow backend request from all frontend urls- Cross-Origin Resource Sharing
// Use helmet to secure HTTP headers
// app.use(helmet()); // middleware 1

// // Use morgan for logging requests
// app.use(morgan('combined')); // middleware 2

// // Use cors to enable Cross-Origin Resource Sharing
// app.use(cors()); // middleware 3

// // Use compression to compress response bodies
// app.use(compression()); // middleware 4

// Use cookie-parser to parse cookies
app.use(cookieParser()); // middleware 5

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json()); //middleware 6
// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); //middleware 7

app.use(express.urlencoded({ extended: true }));

// // Use page routes
app.use(pageRoutes);

// // Use authentication routes
app.use(authRoutes);

// // Use patient data routes
app.use(patientRoutes);

// // Use sahayak routes

app.use(sahayakRoutes);

// Helper function to get the content type based on file extension
// const getContentType = (filePath) => { 
//     const ext = path.extname(filePath);
//     switch (ext) {
//         case '.html':
//             return 'text/html';
//         case '.css':
//             return 'text/css';
//         case '.js':
//             return 'application/javascript';
//         case '.png':
//             return 'image/png';
//         case '.jpg':
//             return 'image/jpeg';
//         case '.svg':
//             return 'image/svg+xml';
//         default:
//             return 'text/plain';
//     }
// };

// Function to serve static files
// const serveFile = (filePath, res) => {
//     fs.exists(filePath, (exists) => {
//         if (exists) {
//             fs.readFile(filePath, (err, content) => {
//                 if (err) {
//                     res.writeHead(500, { 'Content-Type': 'text/plain' });
//                     res.end('Server Error');
//                 } else {
//                     const contentType = getContentType(filePath);
//                     res.writeHead(200, { 'Content-Type': contentType });
//                     res.end(content);
//                 }
//             });
//         } else {
//             res.writeHead(404, { 'Content-Type': 'text/plain' });
//             res.end('404 Not Found');
//         }
//     });
// };

// Function to validate user credentials from users.json
const validateUserCredentials = (email, password, callback) => {
    const usersFilePath = path.join(__dirname, 'users.json');

    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            console.error('Error reading users.json:', err);
            callback(false);
            return;
        }

        try {
            const users = JSON.parse(data);
            const user = users.find((user) => user.email === email && user.password === password);
            callback(!!user); // Returns true if user is found, otherwise false
        } catch (error) {
            console.error('Error parsing users.json:', error);
            callback(false);
        }
    });
};

// Function to register a new user and append to users.json
const registerNewUser = (email, password, callback) => {
    const usersFilePath = path.join(__dirname, 'users.json');

    fs.readFile(usersFilePath, (err, data) => {
        if (err) {
            console.error('Error reading users.json:', err);
            callback(false);
            return;
        }

        try {
            const users = JSON.parse(data);

            // Check if the email already exists
            const userExists = users.some(user => user.email === email);
            if (userExists) {
                callback(false); // User already exists
                return;
            }

            // Add the new user
            users.push({ email, password });

            // Write the updated data back to users.json
            fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
                if (err) {
                    console.error('Error writing to users.json:', err);
                    callback(false);
                    return;
                }

                callback(true); // Registration successful
            });
        } catch (error) {
            console.error('Error parsing users.json:', error);
            callback(false);
        }
    });
};


// Handle login POST request
// app.post('/login', (req, res) => {
//     console.log('Login request received:', req.body);

//     const { email, password } = req.body;
//     validateUserCredentials(email, password, (isValid) => {
//         if (isValid) {
//             console.log('Login successful for:', email);
//             res.status(200).json({ message: 'Login successful', redirect: '/home.html' });
//         } else {
//             console.log('Invalid credentials for:', email);
//             res.status(401).json({ error: 'Invalid credentials', redirect: '/signup.html' });
//         }
//     });
// });

// Handle signup POST request
// app.post('/signup', (req, res) => {
//     const { email, password } = req.body;
//     registerNewUser(email, password, (success) => {
//         if (success) {
//             res.status(200).json({ message: 'User registered successfully', redirect: '/login.html' });
//         } else {
//             res.status(400).json({ error: 'Email already registered' });
//         }
//     });
// });

// Handle form submissions for patient data
// app.post('/home', (req, res) => {
//     const formData = req.body;
//     console.log(formData);
//     fs.readFile(patientDataFile, 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading patient data:', err);
//             res.status(500).send('Error reading data.');
//             return;
//         }

//         let patients = [];
//         if (data) {
//             try {
//                 patients = JSON.parse(data);
//             } catch (parseError) {
//                 console.error('Error parsing patient data:', parseError);
//                 res.status(500).send('Error parsing data.');
//                 return;
//             }
//         }

//         patients.push(formData);

//         fs.writeFile(patientDataFile, JSON.stringify(patients, null, 2), 'utf8', (err) => {
//             if (err) {
//                 console.error('Error writing patient data:', err);
//                 res.status(500).send('Error saving data.');
//                 return;
//             }
//             res.status(200).json({ message: 'Appointment Submitted Successfully' });
//         });
//     });
// });

// Serve static files or redirect to correct pages
// app.get('*', (req, res) => {
//     let filePath;
//     const pathname = req.path;

//     if (pathname === '/') {
//         filePath = path.join(__dirname, 'public', 'index.html');
//     } else if (pathname === '/home') {
//         filePath = path.join(__dirname, 'public', 'home.html');
//     } else if (pathname === '/login') {ī
//         filePath = path.join(__dirname, 'public', 'login.html');
//     } else if (pathname === '/register') {
//         filePath = path.join(__dirname, 'public', 'signup.html');
//     } else if (pathname === '/home/gmch') {
//         filePath = path.join(__dirname, 'public', '/hospital/gmch.html');
//     } else if (pathname === '/home/pgimer') {
//         filePath = path.join(__dirname, 'public', '/hospital/pgimer.html');
//     } else if (pathname === '/home/max') {
//         filePath = path.join(__dirname, 'public', '/hospital/max.html');
//     } else if (pathname === '/home/contact') {
//         filePath = path.join(__dirname, 'public', 'contact.html');
//     } else if (pathname === '/home/about') {
//         filePath = path.join(__dirname, 'public', 'about.html');
//     } else {
//         filePath = path.join(__dirname, pathname);
//     }

//     res.sendFile(filePath);
// });

// // Error-handling middleware

// app.use((err, req, res, next) => {
//     console.error(err.stack); // Log the error stack
//     res.status(500).json({ error: 'Something went wrong!' });
// });

// Start the server
app.listen(PORT, () => {
    console.log("server is running on port");
    console.log(`http://localhost:${PORT}/`);
});