const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    user: "bkpppuocht@gmail.com",
    pass: "siog qdyb rvfs kcfx",
  },
});

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.post("/", (req, res) => {
  const otp = randomInteger(100000, 999999)
  const mailOptions = {
    from: "Sportline Verification <bkpppuocht@gmail.com>",
    to: req.body.email_to,
    subject: "Email OTP Verification",
    text: "Email verification Sportline Applications.",
    html: `<html>

    <body>
      <div class="bodyemail1">Hello, ${req.body.email_to}.<br><br>
        Here is the verification code. Please copy it and dont share to anyone, and verify your email.<br>
        <h2>${otp}</h2>if this email is not intended to you please ignore it. Thank you for understanding.!<br><br>Best Regard,<br>Sportline Team.
      </div>
      <style>
        .bodyemail1 {
          text-align: start
        }
      </style>
    </body>
  
  </html>`,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).json({message: `Sending Verification to ${info.accepted[0]}`, otp: otp});
  });
});

module.exports = router;
