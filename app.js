var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

// connect to db
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errors:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});


// init app
var app = express();

// Views engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set public folder
app.use(express.static(path.join(__dirname, 'public')));

// route
app.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
})

// Start the server
var port = 3000;
app.listen(port, function() {
    console.log('Server started on port ' + port);
})