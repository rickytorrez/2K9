const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');

// load user model
const User = mongoose.model('users');

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

            // gets the image from the array of photos
            const image = profile.photos[0].value.substring(0);

            // sets up information from google to be injected into our database
            const newUser = {
                googleID: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                image: image
            }

            // check for existing user with the user model
            User.findOne({

                // set the google id to equal profile id
                googleId: profile.id

                // the .then promise is gonna give us a user
            }).then(user => {

                // if the user exists
                if(user){
                    // return the callback done - null for no errors and the user object
                    // ~ done is the end result of any strategy ~
                    done(null, user);

                // if user doesn't exist
                }else{
                    // create a new user model with a newUser object
                    new User(newUser)

                        // save it
                        .save()

                        // get the user back and call done while passing the user
                        .then(user => done(null, user));
                }
            })
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => done(null, user));
    });
}