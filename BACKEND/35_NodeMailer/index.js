const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

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

app.post('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    if (!to || !subject || !text) {
        return res.status(400).send("Missing required fields: to, subject, text");
    }

    const receiver = {
        from: 'gauravheer2005@gmail.com',
        to,
        subject,
        text
    };

    // const receiver = {
    //     from: 'gauravheer2005@gmail.com',
    //     to: "kkheer182@gmail.com",
    //     subject: "Test Email",
    //     text: "Hello, this is a test email from my Node.js app!"
    // };

    transporter.sendMail(receiver, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
