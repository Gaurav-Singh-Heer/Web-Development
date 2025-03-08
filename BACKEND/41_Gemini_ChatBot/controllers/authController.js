// const { validateUserCredentials, registerNewUser } = require('../utils/authUtils');
const fs = require('fs');
const path = require('path');

// Login logic
exports.login = (req, res) => {
    const { email, password } = req.body;
    validateUserCredentials(email, password, (isValid) => {
        if (isValid) {
            res.status(200).json({ message: 'Login successful', redirect: '/home.html' });
        } else {
            res.status(401).json({ error: 'Invalid credentials', redirect: '/signup.html' });
        }
    });
};

// Signup logic
exports.signup = (req, res) => {
    const { email, password } = req.body;
    registerNewUser(email, password, (success) => {
        if (success) {
            res.status(200).json({ message: 'User registered successfully', redirect: '/login.html' });
        } else {
            res.status(400).json({ error: 'Email already registered' });
        }
    });
};

// Function to validate user credentials from users.json
function validateUserCredentials(email, password, callback){
    const usersFilePath = path.join(__dirname, '../users.json');


    console.log(usersFilePath);   

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
function registerNewUser(email, password, callback){
    const usersFilePath = path.join(__dirname, '../users.json');

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
