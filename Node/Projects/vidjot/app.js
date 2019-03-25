// bring in express, whenever you install a module and want to bring it in, you must use the require word
const express = require('express');

// bring in the path module 
const path = require('path');

// bring in handlebars
const exphbs = require('express-handlebars');

// bring in method override
const methodOverride = require('method-override');

// bring in flash
const flash = require('connect-flash');

// bring in session
const session = require('express-session');

// bring in body-parser
const bodyParser = require('body-parser');

// bring in passport
const passport = require('passport');

// bring in mongoose
const mongoose = require('mongoose');

// create a variable to initialize our application
const app = express();

// load routes
// load ideas routes to crud ideas to our db
const ideas = require('./routes/ideas');

// load ideas routes to crud users to our db
const users = require('./routes/users');

// passport config - necessary for our local strategy. Need to pass an instance of passport
require('./config/passport')(passport);

// map global promise - get rid of warning
mongoose.Promise = global.Promise;

// connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')
    .then(() => console.log('MongoDB Connected... '))
    .catch(err => console.log(err)); 

// handlebars middleware
// telling the system that we want to use the handlebars engine
// default layout refers to objects of a page that must render continuosly such as the menu tabs
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// static folder middleware
app.use(express.static(path.join(__dirname, 'public')))

// method-override middleware
app.use(methodOverride('_method'));

// express-session middleware
app.use(session ({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

// passport middleware - always put this after express-session
app.use(passport.initialize());
app.use(passport.session());

// flash middleware
app.use(flash());

// global variables 
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');

// the global user variable will be there if there's a user logged in, if not, it will be set to null
    res.locals.user = req.user || null;
    next();
});

// index route, renders index handlebar, we passed the variable title to the views
// the parameter is passed by adding a variable of title on the render function
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
        title: title
    });
});

// about route, renders about handlebar 
app.get('/about', (req, res) => {
    res.render('about');
})

// use routes
// anything that has an "/ideas" will pertain to that ideas file on the routes
app.use('/ideas', ideas)

// anything that has an "/users" will pertain to that users file on the routes
app.use('/users', users)

// create a variable for the port
const port = 5000;

// create a listen method to access our app on a port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});