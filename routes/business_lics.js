var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mongojs = require('mongojs');
var db = require('../db/db').dbDriver;

/* GET users listing. */
router.get('/', function(req, res) {

    var doc_results;
    var limit = parseInt(req.query.limit) || 100;
    limit = limit < 500 ? limit : 500;
    db.demo_test.find().sort({DateAdded: -1}).limit(limit, function(err, doc_results) {
        res.render('business_lics', {
            title: 'Business Lics',
            results: doc_results

        });
    });

});

module.exports = router;
