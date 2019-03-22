// bring in express, whenever you install a module and want to bring it in, you must use the require word
const express = require('express');

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

// bring in mongoose
const mongoose = require('mongoose');

// create a variable to initialize our application
const app = express();

// map global promise - get rid of warning
mongoose.Promise = global.Promise;

// connect to mongoose
mongoose.connect('mongodb://localhost/vidjot-dev')
    .then(() => console.log('MongoDB Connected... '))
    .catch(err => console.log(err)); 

// load idea model
require('./models/Idea');
const Idea = mongoose.model('ideas');

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

// method-override middleware
app.use(methodOverride('_method'));

// express-session middleware
app.use(session ({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))

// flash middleware
app.use(flash());

// global variables 
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
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

// idea index route
app.get('/ideas', (req, res)=> {

// fetch the ideas from the db and pass them to the render
// finds all the ideas
    Idea.find({})

// sorts them by date, descending
        .sort({date:'desc'})

// return the ideas to the index
        .then(ideas => {
            res.render('ideas/index', {
                ideas:ideas
            });
        });
})

// add idea route 
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
})

// edit idea route 
app.get('/ideas/edit/:id', (req, res) => {
// find one specific idea instead of the array
    Idea.findOne({

// match the _id with whatever is in the url
        _id: req.params.id
    })

// promise to get the single idea and render by passing it in as a parameter
    .then(idea => {
        res.render('ideas/edit', {
            idea:idea
        });
    });
});

// post process 
app.post('/ideas', (req, res) => {
    let errors = [];
  
    if(!req.body.title){
        errors.push({text:'Please add a title'});
    }
    if(!req.body.details){
        errors.push({text:'Please add some details'});
    }
  
    if(errors.length > 0){
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });
    } else {
        const newUser = {
            title: req.body.title,
            details: req.body.details
        }
        new Idea(newUser)
            .save()
            .then(idea => {
                req.flash('success_msg', 'Video idea added');
                res.redirect('/ideas');
        })
    }
});

// edit form process
app.put('/ideas/:id', (req, res)=> {
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
app.delete('/ideas/:id', (req,res) => {
    Idea.remove({_id: req.params.id})
        .then(() => {
            req.flash('error_msg', 'Video idea removed');
            res.redirect('/ideas');
        })
});

// create a variable for the port
const port = 5000;

// create a listen method to access our app on a port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});