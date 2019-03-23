const LocalStrategy = require('passport-local')
    .Strategy
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// load user model
const User = mongoose.model('users');

// local strategy
module.exports = function (passport){

// after it's finished authenticating we must call the cb - done function
    passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
        
// check for the user
        User.findOne({
            email: email
        }).then(user => {
            if(!user){
                return done(null, false, {message: 'No User Found'});
            }

// check for the right password
// compares the password from the form with the password from the user object in the db
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) throw err;

// if password matches, return done, pass null for error and second for the user itself
                if (isMatch){
                    return done(null, user);

// if the password doesnt match
                } else {
                    return done(null, false, {message: 'Password Incorrect'});
                }
            })
        })
    }));
}

