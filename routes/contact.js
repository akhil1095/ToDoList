var express = require('express');
var router = express.Router();
var passport = require('passport');

// ADD MONGOOSE SO WE CAN DO CRUD
//var mongoose = require('mongoose');

// add a reference to the Article model
var Contact = require('../models/contact');

// GET articles main page
router.get('/', function(req, res, next) {

    // use the Article model to retrieve all articles
    Contact.find(function(err, contacts) {
        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            // we got data back
            // show the view and pass the data to it
            res.render('contacts/index', {
                title: 'contacts',
                contacts: contacts,

                displayName: req.user ? req.user.displayName : ''            });
        }
    });

});

// show the add article form
router.get('/addcontact', function(req, res, next) {
    res.render('contacts/addcontact', {
        title: 'Add a new Contact',
        displayName: req.user ? req.user.displayName : ''
    });
});

// process the submission of a new article
router.post('/addcontact', function(req, res, next) {

    // try to save, and redirect to index if successful
    Contact.create( {
        name: req.body.name,
        number: req.body.number
    }, function(err, Contact) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts');
        }
    });
});

// show the edit page
router.get('/:id', function(req, res, next) {
    // create an id variable
    var id = req.params.id;

    // use mongoose and our model to find the right article
    Contact.findById(id, function(err, contact) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            //show the edit view
            res.render('contacts/editcontactt', {
                title: 'Contact Details',
                contact: contact
                ,
                displayName: req.user ? req.user.displayName : ''
            });
        }
    });
});

// process the edit form submission
router.post('/:id', function(req, res, next) {
    var id = req.params.id;

    // create an article object
    var contact = new Contact( {
        _id: id,
        name: req.body.name,
        number: req.body.number
    });

    // use mongoose to do the update
    Contact.update( { _id: id }, contact, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts');
        }
    });
});

// run delete on the selected article
router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;

    Contact.remove( { _id: id }, function(err) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/contacts');
        }
    });
});

// make this public so the rest of app can see it
module.exports = router;

