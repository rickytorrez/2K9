// bring in express, whenever you install a module and want to bring it in, you must use the require word
const express = require('express');

// bring in handlebars
const exphbs = require('express-handlebars');

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

// add idea route 
app.get('/ideas/add', (req, res) => {
    res.render('ideas/add');
})

// process form - post request
app.post('/ideas', (req, res)=> {
    
    res.send('ok');
})

// create a variable for the port
const port = 5000;

// create a listen method to access our app on a port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});