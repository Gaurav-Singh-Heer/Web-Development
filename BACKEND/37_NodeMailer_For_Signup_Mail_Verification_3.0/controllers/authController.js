const nodemailer = require("nodemailer");
const users = require("../models/userModel");

let otpStore = {};

const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail, Outlook
    port: 587,  // Use 587 for TLS, 465 for SSL
    secure: false,  // False for TLS
    // secure: true,
    // port: 465, // PORT of GMAIL
    auth: {
        user: 'agamgaurav1274@gmail.com', // your email
        // pass: 'Gaurav@2005'   // your email password or app-specific password
        pass: 'qhmkosvdymrnosjt'   // your app-specific password
    
    }
});

exports.getSignupPage = (req, res) => {
    res.render("signup");
};

exports.signup = (req, res) => {
    const { email } = req.body;

    if (!email) return res.send("Email is required!");

    const otp = Math.floor(100000 + Math.random() * 900000);
    otpStore[email] = otp;
    users[email] = { email, otp };

    const mailOptions = {
        from: "agamgaurav1274@gmail.com",
        to: email,
        subject: "Email Verification OTP",
        text: `Your OTP for verification is ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.send("Error sending email");
        }
        console.log(`OTP Sent: ${info.response}`);
        res.render("verify", { email });
    });
};

exports.verifyOTP = (req, res) => {
    const { email, otp } = req.body;

    if (otpStore[email] && otpStore[email] == otp) {
        delete otpStore[email]; // OTP verified, remove it
        res.send(`<h2>Verification Successful for ${email}</h2>`);
    } else {
        res.send("<h2>Invalid OTP! Try Again.</h2>");
    }
};
