var express = require('express');
var router = express.Router();

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


module.exports = router;
