const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password'
    }
});

// Define email data
let mailOptions = {
    from: 'your_email@gmail.com',
    to: 'recipient@example.com',
    subject: 'Hello from your website',
    text: 'This is a test email from my website.'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your_sendgrid_api_key');

const msg = {
    to: 'recipient@example.com',
    from: 'your_email@example.com',
    subject: 'Hello from your website',
    text: 'This is a test email from my website.',
};

sgMail.send(msg)
    .then(() => {
        console.log('Email sent');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
s