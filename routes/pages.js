var express = require('express');
var router = express.Router();


// get route
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Home'
    });
});



// Exports
module.exports = router;