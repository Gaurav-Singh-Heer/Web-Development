const express = require('express');
const { login, signup } = require('../controllers/authController');

const router = express.Router();

// Define login route
router.post('/login', login);

// Define signup route
router.post('/signup', signup);

module.exports = router; 