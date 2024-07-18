var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'wpissa@gmail.com',
        pass: 'mkjgelxsfrctnqmx'
    }
  });
  
  var mailOptions = {
    from: 'wpissa@gmail.com',
    to: 'perrinemmanuelnzaou@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });