const express = require("express");
const User = require("../models/27_user");
const nodemailer = require("nodemailer");

const router = express.Router();
const otpStorage = {}; // Temporary OTP storage (Use Redis in production)

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'gauravheer2005@gmail.com', // your email
        pass: 'txnfawwamiyjcvyo'  // your app-specific password
    }
});

// Function to send OTP
const sendOTP = async (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const mailOptions = {
        from: "gauravheer2005@gmail.com",
        to: email,
        subject: "Your Login OTP",
        text: `Your OTP for login is: ${otp}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return otp;
    } catch (error) {
        console.error("Error sending OTP:", error);
        return null;
    }
};

// Signup Page Route
router.get("/signup", (req, res) => res.render("signup"));

// Signup Route with OTP Verification
router.post("/signup", async (req, res) => {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).send("Email already registered.");
    }

    const otp = await sendOTP(email);
    if (!otp) {
        return res.status(500).send("Failed to send OTP. Try again.");
    }

    otpStorage[email] = { otp, fullName, password };
    res.render("verify_otp", { email });
});

// OTP Verification Route for Signup
router.post("/verify-otp", async (req, res) => {
    const { email, otp } = req.body;

    if (otpStorage[email] && otpStorage[email].otp == otp) {
        const { fullName, password } = otpStorage[email];
        delete otpStorage[email];

        const newUser = new User({ fullName, email, password });
        await newUser.save();

        // return res.send("Signup successful!");
        return res.render("signin");
    }

    return res.status(400).send("Invalid OTP. Try again.");
});

// Signin Page Route
router.get("/signin", (req, res) => res.render("signin"));

// Signin Route (Send OTP after correct credentials)
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Match email and password, and generate a token
        const user = await User.matchPasswordAndGenerateToken(email, password);

        if (!user) {
            return res.render("signin", { error: "Incorrect Email or Password" });
        }

        // Send OTP for verification
        const otp = await sendOTP(email);
        if (!otp) {
            return res.status(500).send("Failed to send OTP. Try again.");
        }

        otpStorage[email] = { otp }; // Store OTP temporarily
        return res.render("verify_login_otp", { email });
    } catch (error) {
        return res.render("signin", { error: "Incorrect Email or Password" });
    }
});

// OTP Verification for Login
router.post('/verify-login-otp', async (req, res) => {
    const { email, otp } = req.body;

    if (otpStorage[email] && otpStorage[email].otp == otp) {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send('User not found');
        }

        // Generate auth token after OTP validation
        const token = await User.matchPasswordAndGenerateToken(email, user.password);
        if (!token) {
            return res.status(400).send('Token generation failed');
        }

        // Set the token as a cookie and redirect to homepage
        return res.cookie("token", token).redirect("/");
    }

    return res.status(400).send('Invalid OTP');
});

// Logout Route
router.get("/logout", (req, res) => res.clearCookie("token").redirect("/"));

module.exports = router;
