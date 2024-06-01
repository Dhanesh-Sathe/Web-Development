function sendOTP() {
 const email = document.getElementById('email');
 const otpverify = document.getElementsByClassName('otpverify')[0];

 let otp_val = Math.floor(Math.random() * 10000);

 let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
 Email.send({
   SecureToken : "869409d2-45e1-47b0-a0e4-3894528420fd",
   To : email.value,
   From : "sathedhanesh1@gmail.com",
   Subject : "Email OTP using JavaScript",
   Body : emailbody,
}).then(

 message => {
   if (message === "OK") {
     alert("OTP sent to your email " + email.value);

     otpverify.style.display = "flex";
     const otp_inp = document.getElementById('otp_inp');
     const otp_btn = document.getElementById('otp-btn');

     otp_btn.addEventListener('click', () => {
       if (otp_inp.value == otp_val) {
         alert("Email address verified...");
       }
       else {
         alert("Invalid OTP");
       }
     })
   }
 }
);
}


// Import the nodemailer library
// const nodemailer = require('nodemailer');

// // Generate a random OTP
// function generateOTP() {
//   return Math.floor(1000 + Math.random() * 9000);
// }

// // Send OTP to the user's email
// function sendOTP(email, otp) {
//   // Create a nodemailer transporter using SMTP transport
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.yourisp.com',
//     port: 2525,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: 'sathedhanesh1@gmail.com',
//       pass: 'BB21812EAE9D0CF558A2DB84D3D80506D77D'
//     }
//   });

//   // Define the email body
//   let mailOptions = {
//     from: 'sathedhanesh1@gmail.com',
//     to: email,
//     subject: 'Email OTP using Node.js',
//     html: `<h2>Your OTP is ${otp}</h2>`
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }

// // Usage
// const email = document.getElementById(email); // Replace with the user's email
// const otp = generateOTP();
// sendOTP(email, otp);

// message => {
//   if (message === "OK") {
//     alert("OTP sent to your email " + email.value);

//     otpverify.style.display = "flex";
//     const otp_inp = document.getElementById('otp_inp');
//     const otp_btn = document.getElementById('otp-btn');

//     otp_btn.addEventListener('click', () => {
//       if (otp_inp.value == otp_val) {
//         alert("Email address verified...");
//       }
//       else {
//         alert("Invalid OTP");
//       }
//     })
//   }
// }