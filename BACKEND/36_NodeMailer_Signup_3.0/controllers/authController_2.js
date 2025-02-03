// controllers/authController.js
const User = require('../models/User');
const { sendOTP } = require('../config/mailer');

let currentOTP = null;
let currentEmail = null;

exports.showSignup = (req, res) => {
    res.render('auth/signup');
};

exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.send('User already exists! Please login.');
        }

        const newUser = new User({ email, password });
        await newUser.save();

        res.redirect('/login');
    } catch (err) {
        console.error('Signup Error:', err);
        res.status(500).send('Error during signup.');
    }
};

exports.showLogin = (req, res) => {
    res.render('auth/login');
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.send('Invalid credentials!');
        }

        currentEmail = email;
        currentOTP = Math.floor(100000 + Math.random() * 900000);

        await sendOTP(email, currentOTP);
        res.render('auth/verifyOTP');
    } catch (err) {
        console.error('Login Error:', err);
        res.status(500).send('Error during login.');
    }
};

exports.verifyOTP = (req, res) => {
    const { otp } = req.body;

    if (otp == currentOTP) {
        res.render('auth/home');
    } else {
        res.send('Invalid OTP!');
    }
};
