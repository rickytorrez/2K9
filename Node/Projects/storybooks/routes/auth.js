const express = require('express');
const router = express.Router();
const passport = require('passport');

// use passport to authenticate users, use the strategy named google
// scope are the permissions that we asked the user to share - our request from the user when they authenticate
router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}));

module.exports = router;