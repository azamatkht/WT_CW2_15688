const express = require('express');


const todoController = require('./controllers/todoController');

const bodyParser = require('body-parser');

const app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log('You are listening to port 3000');