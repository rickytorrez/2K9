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

module.exports = router;