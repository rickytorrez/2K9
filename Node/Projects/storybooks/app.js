const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// load user model
require('./models/User');

// passport config
require('./config/passport')(passport);

// load routes - loads the file to use the route
const auth = require('./routes/auth');

// load keys
const keys = require('./config/keys');

// map global promise
mongoose.Promise = global.Promise;

// mongoose connect - to connect to our mLab database
mongoose.connect(keys.mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const app = express();

app.get('/', (req, res) => {
    res.send('it works!');
});

// use routes
// anything that goes to /auth should go to our auth file on routes folder
app.use('/auth', auth)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});