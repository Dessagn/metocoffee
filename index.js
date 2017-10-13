const express = require('express');
const path = require('path');
const mailer = require('nodemailer');
var xoauth2 = require("xoauth2"), xoauth2gen;
var smtpTransport = require('nodemailer-smtp-transport');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 5000;

const app = express();
var success= false;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, './client/build')));

app.post('/contact/sendMessage', (req, res, next) => {
    var transporter = mailer.createTransport(smtpTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        domain: 'gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: 'metocoffee@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: process.env.ACCESS_TOKEN
            })
        }
    }));

    var mailOptions = {
        from: 'MetoCoffee <metocoffee@gmail.com>',
        to: 'janetogo1200@gmail.com, metocoffee@gmail.com, metogreen@outlook.com',
        subject: 'Coffee origin Tour Subscription',
        text: 'This is a subscription request for Ethiopia - Coffee Origin Tour. I provide my contact information as below: \n' +
        'Name: ' + req.body.first_name + ' ' + req.body.last_name + ' \n' +
        'Email: ' + req.body.email + ' \n' +
        'Phone number: ' + req.body.telephone + ' \n' +
        'Message: ' + req.body.message + ' \n' +
        'Thank you.',
        html: '<h3 class="center">Ethiopia - Coffee Origin Tour </h3>\n <h4>This is a request for Coffee Origin Tour to be held on December 4th, 2017</h4>' +
        '<ul><li> \nFull Name: ' + req.body.first_name + ' ' + req.body.last_name +
        '</li><li>Email: '+ req.body.email1 +
        '</li><li>Retyped email: '+ req.body.email2 +
        '</li><li>Email: '+ req.body.telephone +
        '</li><li>Message: ' + req.body.message + '</li></ul>' +
        '\nThank you'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        //console.log('We are here');
        if(error){
            console.log(error);
            success = false;
            console.log('Sent ' + success);
            res.redirect('/contact');
        }else{
            success = true;
            console.log('Message Sent!' + success);
            res.end();
        }
    });
    res.redirect('/confirm');

});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });

app.listen(PORT);