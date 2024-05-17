const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
      user: 'bkpppuocht@gmail.com',
      pass: 'siog qdyb rvfs kcfx'
    }
  });

router.post("/", (req, res) => {
  const mailOptions = {
    from: "bkpppuocht@gmail.com",
    to: "aridwanhakim17@gmail.com",
    subject: "Test Email Sending",
    text: "Hello world, this is sending email test",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

module.exports = router;
