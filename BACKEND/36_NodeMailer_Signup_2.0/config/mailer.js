// config/mailer.js
const nodemailer = require('nodemailer');

// Create reusable transporter object using the default SMTP transport.
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
// Send OTP email
const sendOTP = (email, otp) => {
  const mailOptions = {
    from: 'agamgaurav1274@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendOTP };

/*http://localhost:3000/signup*/