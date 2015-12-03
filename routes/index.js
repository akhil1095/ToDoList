var express = require('express');
var passport = require('passport');
var router = express.Router();



var User = require('../models/user');
/* GET about page */
router.get('/about', function (req, res, next) {
    res.render('about', {
        title: 'About',
        displayName: req.user ? req.user.displayName : ''
    });
});
/* GET projects page */
    router.get('/projects', function (req, res, next) {
        res.render('projects', {
            title: 'Projects',
            displayName: req.user ? req.user.displayName : ''
        });
    });
/* GET services page */
    router.get('/services', function (req, res, next) {
        res.render('Services', {
            title: 'Services',
            displayName: req.user ? req.user.displayName : ''
        });
    });
/* GET contact page */
    router.get('/contactme', function (req, res, next) {
        res.render('contactme', {
            title: 'Contact Me',
            displayName: req.user ? req.user.displayName : ''
        });
    });
/* Render todoList page. */
router.get('/todoList', function(req, res, next) {
  res.render('todoList', { 
      title: 'Todo List',
      displayName: req.user ? req.user.displayName : '',
      username: req.user ? req.user.username : '' 
  });
});
    router.get('/contact', function (req, res, next) {
        res.render('contact', {
            title: 'contact',
            displayName: req.user ? req.user.displayName : ''
        });
    });
/* Render home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home',
        displayName: req.user ? req.user.displayName : ''
    });
});

/* Render Login page. */
router.get('/login', function (req, res, next) {
    if (!req.user) {
        res.render('login', {
            title: 'Login',
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/users');
    }
});

/* Process the Login Request */
router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/users',
    failureRedirect: '/login',
    failureFlash: true
}));

/* Show Registration Page */
router.get('/register', function (req, res, next) {
    if (!req.user) {
        res.render('register', {
            title: 'Register',
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else {
        return res.redirect('/');
    }
});

/* POST signup data. */
router.post('/register', passport.authenticate('local-registration', {
    //Success go to Profile Page / Fail go to Signup page
    successRedirect : '/users',
    failureRedirect : '/register',
    failureFlash : true
}));


/* Process Logout Request */
router.get('/logout', function (req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
