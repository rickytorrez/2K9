const express = require('express');
const router = express.Router();
const passport = require('passport');

// use passport to authenticate users, use the strategy named google
// scope are the permissions that we asked the user to share - our request from the user when they authenticate
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

// google callback - if authentication fails, redirect us to home. If it's succesful, redirect to dashboard
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

// route to verify if there a user in session
router.get('/verify', (req, res) => {
    if(req.user){
        console.log(req.user);
    } else {
        console.log('not auth');
    }
});

// route to log out
router.get('/logout', (req, res) => {
    req.logOut();
    res.redirect('/');
});

module.exports = router;