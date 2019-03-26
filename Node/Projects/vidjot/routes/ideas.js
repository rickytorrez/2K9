const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// load authenticated helper
const {ensureAuthenticated} = require('../helpers/auth');

// load idea model
require('../models/Idea');
const Idea = mongoose.model('ideas');

// idea index route
router.get('/', ensureAuthenticated, (req, res) => {

    // fetch the ideas from the db and pass them to the render
    // finds the ideas with the matching id of the user
    Idea.find({user: req.user.id})

        // sorts them by date, descending
        .sort({
            date: 'desc'
        })

        // return the ideas to the index
        .then(ideas => {
            res.render('ideas/index', {
                ideas: ideas
            });
        });
})

// add idea route - protect the route with ensureAuthenticated
router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('ideas/add');
})

// edit idea route 
router.get('/edit/:id', ensureAuthenticated, (req, res) => {
    // find one specific idea instead of the array
    Idea.findOne({

            // match the _id with whatever is in the url
            _id: req.params.id
        })

        // promise to get the single idea and render by passing it in as a parameter
        .then(idea => {

            // access control to match idea's user id to the user in session to edit an idea
            if(idea.user != req.user.id){
                req.flash('error_msg', 'Not Authorized');
                res.redirect('/ideas');
            } else {
                res.render('ideas/edit', {
                    idea: idea
                });
            }      
        });
});

// post process 
router.post('/', ensureAuthenticated, (req, res) => {
    let errors = [];

    if (!req.body.title) {
        errors.push({
            text: 'Please add a title'
        });
    }
    if (!req.body.details) {
        errors.push({
            text: 'Please add some details'
        });
    }

    if (errors.length > 0) {
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });
    } else {
        const newUser = {
            title: req.body.title,
            details: req.body.details,
            user: req.user.id
        }
        console.log(newUser);
        new Idea(newUser)
            .save()
            .then(idea => {
                req.flash('success_msg', 'Video idea added');
                res.redirect('/ideas');
            })
    }
});

// edit form process
router.put('/:id', ensureAuthenticated, (req, res) => {
    Idea.findOne({
            _id: req.params.id
        })
        .then(idea => {
            // new values
            idea.title = req.body.title;
            idea.details = req.body.details;

            idea.save()
                .then(idea => {
                    req.flash('success_msg', 'Video idea updated');
                    res.redirect('/ideas');
                })
        })
});

// delete idea
router.delete('/:id', ensureAuthenticated, (req, res) => {
    Idea.remove({
            _id: req.params.id
        })
        .then(() => {
            req.flash('error_msg', 'Video idea removed');
            res.redirect('/ideas');
        })
});

module.exports = router;