var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mongojs = require('mongojs');
var db = require('../db/db').dbDriver;

/* GET users listing. */
router.get('/', function(req, res) {

    var doc_results;
    db.demo_test.findOne({
        _id:mongojs.ObjectId('541f1a7a1c944e8941346681')
    }, function(err, doc) {
        // doc._id.toString() === '523209c4561c640000000001'
        doc_results = doc.results;
        res.render('business_lics', {
            title: 'Business Lics',
            results: doc_results

        });
    });

});

module.exports = router;
