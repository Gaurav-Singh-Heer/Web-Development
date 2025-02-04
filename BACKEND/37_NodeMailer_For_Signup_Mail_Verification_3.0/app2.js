const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes2');
const app = express();

// Middleware to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set('view engine', 'ejs');

// Serve static files (like CSS)
app.use(express.static('public'));

// Use the routes
app.use(authRoutes);

// Connect to MongoDB (adjust your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/signupApp-EmailVerification')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000');
    });
})
.catch((err) => {
    console.log('Error connecting to MongoDB:', err);
});
