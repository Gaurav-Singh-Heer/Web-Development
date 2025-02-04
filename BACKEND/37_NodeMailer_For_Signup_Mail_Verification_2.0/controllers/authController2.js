const nodemailer = require('nodemailer');
const User = require('../models/userModel2');

// Temporary in-memory store for email and OTP
let tempData = {};

// Step 1: Handle Signup Form Submission
exports.signup = async (req, res) => {
    const { email, password } = req.body;
    let otp = Math.floor(100000 + Math.random() * 900000);  // Generate OTP
    
    // Store email, OTP, and password temporarily
    tempData[email] = { otp, password };

    // Send OTP via Email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'agamgaurav1274@gmail.com', // your email
            pass: 'qhmkosvdymrnosjt'  // your app-specific password
        }
    });

    const mailOptions = {
        from: 'agamgaurav1274@gmail.com',
        to: email,
        subject: 'Verify Your Email Address',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Error in sending email: ' + error);
        }

        // Pass email and password to the 'verify' view
        res.render('verify', { email: email, password: password });
    });
};

/*
// Step 1: Handle Signup Form Submission
exports.signup = async (req, res) => {
    const { email, password } = req.body;
    let otp = Math.floor(100000 + Math.random() * 900000);  // Generate OTP
    
    // Store email and OTP temporarily
    tempData[email] = otp;

    // Send OTP via Email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'agamgaurav1274@gmail.com', // your email
            pass: 'qhmkosvdymrnosjt'  // your app-specific password
        }
    });

    const mailOptions = {
        from: 'agamgaurav1274@gmail.com',
        to: email,
        subject: 'Verify Your Email Address',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.send('Error in sending email: ' + error);
        }
        res.redirect('/verify');
    });
};
*/

// Step 2: Handle OTP Verification
exports.verifyEmail = (req, res) => {
    const { otp } = req.body;
    const email = req.body.email;
    
    console.log("Email: ", email);
    console.log("Entered OTP: ", otp);
    console.log("Stored OTP: ", tempData[email]?.otp);
    console.log("Stored Password: ", tempData[email]?.password);  // Debug log for password

    // Check if OTP matches and exists in the temporary store
    if (tempData[email] && otp == tempData[email].otp) {
        const password = tempData[email].password; // Retrieve the password from tempData
        
        if (!password) {
            return res.send('Password is required');
        }

        const newUser = new User({
            email: email,
            password: password,  // In production, remember to hash the password
            isVerified: true
        });

        newUser.save()
            .then(() => {
                // Once verified, delete the OTP from tempData
                delete tempData[email];
                res.redirect('/signin');
            })
            .catch((err) => {
                res.send('Error saving user to the database: ' + err);
            });
    } else {
        res.send('Invalid OTP or OTP expired');
    }
};
/*
exports.verifyEmail = (req, res) => {
    const { otp, password } = req.body;
    const email = req.body.email;

    // Check if OTP matches and exists in the temporary store
    if (tempData[email] && otp == tempData[email]) {
        const newUser = new User({
            email: email,
            password: password,  // In production, remember to hash the password
            isVerified: true
        });

        newUser.save()
            .then(() => {
                // Once verified, delete the OTP from tempData
                delete tempData[email];
                res.redirect('/signin');
            })
            .catch((err) => {
                res.send('Error saving user to the database: ' + err);
            });
    } else {
        res.send('Invalid OTP or OTP expired');
    }
};
*/
// Step 3: Handle Sign In
exports.signIn = (req, res) => {
    const { email, password } = req.body;
    
    User.findOne({ email })
        .then(user => {
            if (!user || user.password !== password) {
                res.render('signin', { message: 'Invalid email or password' });
            } else {
                if (!user.isVerified) {
                    res.render('signin', { message: 'Please verify your email first' });
                } else {
                    res.render('/home'); // Redirect to dashboard
                }
            }
        })
        .catch(err => {
            res.render('signin', { message: 'An error occurred: ' + err });
        });
};
