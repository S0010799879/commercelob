var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
 // service: 'smtp.gmail.com',
   host:'smtp.gmail.com',
   port:465,
   auth: {
    user: 'anton.sap@test.franke.com',
    pass: 'US9YeE>K'
  }
});
var mailOptions = {
  from: 'anton.luette@franke.com',
  to: 'anton.luette@franke.com',
  subject: 'Sending Email using Node.js -1 über Google',
  text: 'That was easy!'
};

function senden ()
{
 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

exports.mailer =  function(){
   console.log("hier bin ich")
   senden();
   
   return true;
}
