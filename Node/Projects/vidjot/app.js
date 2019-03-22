// bring in express, whenever you install a module and want to bring it in, you must use the require word
const express = require('express');

// bring in handlebars
const exphbs = require('express-handlebars');

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

// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// add idea route 
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
})

// process form - post request
// validations 
app.post('/ideas', (req, res)=> {
    let errors = [];
    if(!req.body.title) {
        errors.push({text: 'Please add a title'})
    }
    if(!req.body.details) {
        errors.push({text: 'Please add some details'})
    }

    if(errors.length > 0) {
        res.render('ideas/add', {
            errors: errors,
            title: req.body.title,
            details: req.body.details
        });

// after validation passes, add the idea to the DB
    } else {
        const newUser = {
            title: req.body.title,
            details: req.body.details
        }

// Use a promise to return the idea and redirect to the ideas listing page
        new Idea(newUser)
            .save()
            .then(idea => {
                res.redirect('/ideas');
            })
    }
})

// create a variable for the port
const port = 5000;

// create a listen method to access our app on a port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});