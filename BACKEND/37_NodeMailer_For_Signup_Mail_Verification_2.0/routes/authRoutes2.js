const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController2.js');

// Route for showing signup form
router.get('/signup', (req, res) => {
    res.render('signup');
});

// Route for handling signup form submission
router.post('/signup', authController.signup);

// Route for email verification
router.get('/verify', (req, res) => {
    res.render('verify');
});

// Route for handling OTP verification
router.post('/verify', authController.verifyEmail);

// Route for signin page
// In authRoutes2.js
router.get('/signin', (req, res) => {
    console.log('Signin route hit!');
    res.render('signin');
});

// Route for handling signin form submission
router.post('/signin', authController.signIn);

router.get('/home', (req, res) => {
    res.render('home');
});

module.exports = router;
