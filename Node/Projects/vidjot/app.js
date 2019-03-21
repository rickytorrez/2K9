// bring in express, whenever you install a module and want to bring it in, you must use the require word
const express = require('express');

// bring in handlebars
const exphbs = require('express-handlebars');

// create a variable to initialize our application
const app = express();

// handlebars middleware
// telling the system that we want to use the handlebars engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// index route
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
        title: title
    });
});

// about route
app.get('/about', (req, res) => {
    res.render('about');
})

// create a variable for the port
const port = 5000;

// create a listen method to access our app on a port
app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});