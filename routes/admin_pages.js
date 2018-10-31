var express = require('express');
var router = express.Router();

// Get pages index
router.get('/', function(req, res) {
    res.send('admin area');
});

// Get add pages
router.get('/add-page', function(req, res) {

    var title = "";
    var slug = "";
    var content = "";

    res.render('admin/add_page', {
        title: title,
        slug: slug,
        content: content
    });

});

// Post add pages
router.post('/add-page', function(req, res) {

    // validate
    req.checkBody('title', 'Title must have a value.').notEmpty();
    req.checkBody('content', 'Content must have a value.').notEmpty();

    var title = req.body.title;
    var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if (slug == "") slug = title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;

     // validate
     var errors = req.validationErrors();

     if (errors) {
        // console.log('errors');
        res.render('admin/add_page', {
            errors: errors,
            title: title,
            slug: slug,
            content: content
        });
     } else {
         console.log('success');
     }

   

});

// Exports
module.exports = router;