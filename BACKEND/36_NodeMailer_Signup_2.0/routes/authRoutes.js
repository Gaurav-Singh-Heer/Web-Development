// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/signup', authController.showSignup);
router.post('/signup', authController.signup);

router.get('/login', authController.showLogin);
router.post('/login', authController.login);

router.post('/verify-otp', authController.verifyOTP);

module.exports = router;
