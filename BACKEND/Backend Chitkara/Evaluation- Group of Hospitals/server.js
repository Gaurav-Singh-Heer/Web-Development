const http = require('http');
const fs = require('fs');
const path = require('path');

// Server port
const PORT = 3000;

// Helper function to get the content type based on file extension
const getContentType = (filePath) => {
    const ext = path.extname(filePath);
    switch (ext) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'application/javascript';
        case '.png':
            return 'image/png';
        case '.jpg':
            return 'image/jpeg';
        case '.svg':
            return 'image/svg+xml';
        default:
            return 'text/plain';
    }
};

// Function to handle serving static files
const serveFile = (filePath, res) => {
    fs.exists(filePath, (exists) => {
        if (exists) {
            fs.readFile(filePath, (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server Error');
                }
                 else {
                    const contentType = getContentType(filePath);
                    res.statusCode = 200;
                    res.setHeader("Content-Type", contentType);
                    res.end(content);
                    // res.writeHead(200, { 'Content-Type': contentType });
                }
            });
        } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", 'text/plain');
            res.end('404 Not Found');
            // res.end(content);
            // res.writeHead(404, { 'Content-Type': 'text/plain' });
        }
    });
};

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

// Create the server
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/login') {
        // Handle login POST request
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { email, password } = JSON.parse(body);

                validateUserCredentials(email, password, (isValid) => {
                    if (isValid) {
                        // Valid credentials
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Login successful' }));
                    } else {
                        // Invalid credentials
                        res.writeHead(401, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Invalid credentials' }));
                    }
                });
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid request format' }));
            }
        });
    } if (req.method === 'POST' && req.url === '/signup') {
        // Handle signup POST request
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const { email, password } = JSON.parse(body);

                // Register the new user
                registerNewUser(email, password, (success) => {
                    if (success) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'User registered successfully', redirect: '/login.html' }));
                    } else {
                        res.writeHead(400, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ error: 'Email already registered' }));
                    }
                });
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid request format' }));
            }
        });
    } else {
        // Serve static files
        let filePath;

        if (req.url === '/') {
            filePath = path.join(__dirname, 'index.html');
        } else if (req.url === '/home') {
            filePath = path.join(__dirname, 'home.html');
        } else if (req.url === '/login') {
            filePath = path.join(__dirname, 'login.html');
        } else if (req.url === '/register') {
            filePath = path.join(__dirname, 'signup.html');
        }else if (req.url.endsWith(".css")) {
            const cssPath = path.join(__dirname, req.url);
            if (fs.existsSync(cssPath)) {
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/css");
                res.end(fs.readFileSync(cssPath, "utf-8"));
            } else {
                res.statusCode = 404;
                res.end("CSS file not found.");
            }
        }
         else {
            filePath = path.join(__dirname, req.url);
        }

        serveFile(filePath, res);
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
