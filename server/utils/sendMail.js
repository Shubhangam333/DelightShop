import nodemailer from "nodemailer";

var transporter = nodemailer.createTransport({
  //configuration
});

// Send the verification email
function sendVerificationEmail(user) {
  const verificationLink = `http://localhost:5173/verify/${user.verificationToken}`;
  const mailOptions = {
    from: "your_email@gmail.com",
    to: user.email,
    subject: "Email Verification",
    text: `Click the link to verify your email: ${verificationLink}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Email not sent:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
