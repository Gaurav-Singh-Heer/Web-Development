// controllers/authController.js
const { sendOTP } = require('../config/mailer');

let users = {}; // A mock user store
let currentOTP = null;
let currentEmail = null;

exports.showSignup = (req, res) => {
  res.render('auth/signup');
};

exports.signup = (req, res) => {
  const { email, password } = req.body;
  
  if (!users[email]) {
    users[email] = { email, password };
    res.redirect('/login');
  } else {
    res.send('User already exists!');
  }
};

exports.showLogin = (req, res) => {
  res.render('auth/login');
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  
  if (users[email] && users[email].password === password) {
    currentEmail = email;
    currentOTP = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    sendOTP(email, currentOTP).then(() => {
      res.render('auth/verifyOTP');
    }).catch(err => {
      res.status(500).send('Error sending OTP: ' + err);
    });
  } else {
    res.send('Invalid credentials!');
  }
};

exports.verifyOTP = (req, res) => {
  const { otp } = req.body;
  
  if (otp == currentOTP) {
    res.send('Login successful!');
  } else {
    res.send('Invalid OTP!');
  }
};
