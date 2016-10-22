var express = require('express');
var router = express.Router();
var nodemailer = require( "nodemailer" );
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Portfolio', page: 'Home' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
    res.render('about', { title: 'About', page: 'About'  });
    
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact', page: 'Contact'});
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
    res.render('projects', { title: 'Projects', page: 'Projects'});
});

/* GET services page. */
router.get('/services', function (req, res, next) {
    res.render('services', { title: 'Services', page: 'Services'});
});
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport( "SMTP", {
    service: "Outlook",
    auth: {
        user: "morrice.p@collegecoders.ca",
        pass: "Sherri007"
    }
} );
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

router.get( '/send', function ( req, res,  next )
{
    var mailOptions = {
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log( mailOptions );
    smtpTransport.sendMail( mailOptions, function ( error, response )
    {
        if ( error )
        {
            console.log( error );
            res.end( "error" );
        } else
        {
            console.log( "Message sent: " + response.message );
            res.end( "sent" );
        }
    } );


} );

module.exports = router;
