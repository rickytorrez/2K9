const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

module.exports = function (passport) {

    // define strategy
    passport.use(

        // use google strategy and access cliendId and secret from our keys file
        new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',

            // the proxy will throw ssh errors out
            proxy: true

        // callback for access token and user information
        }, (accessToken, refreshToken, profile, done) => {
            console.log(accessToken);
            console.log(profile);
        })
    )
}