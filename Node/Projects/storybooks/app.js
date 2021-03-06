const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// load user model
require('./models/User');

// passport config
require('./config/passport')(passport);

// load routes - loads the file to use the route
const index = require('./routes/index');
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

// handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// cookie-parser middleware
// app.use(cookieParser);

// express-session middleware
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

// set global variables - let's us check for user logged in throughout the app
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

// use routes
// anything that goes to /auth should go to our auth file on routes folder
app.use('/', index);
app.use('/auth', auth)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});