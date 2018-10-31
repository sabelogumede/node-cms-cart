var express = require('express');
var router = express.Router();

// get route
router.get('/', function(req, res) {
    res.send('admin area');
});



// Exports
module.exports = router;