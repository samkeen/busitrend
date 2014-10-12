var express = require('express');
var router = express.Router();
var _ = require('underscore');
var mongojs = require('mongojs');
var db = require('../db/db').dbDriver;

/* GET all business_lics . */
router.get('/', function(req, res) {

    var doc_results;
    var limit = parseInt(req.query.limit) || 100;
    limit = limit < 500 ? limit : 500;
    db.demo_test.find().sort({DateAdded: -1}).limit(limit, function(err, doc_results) {
        res.json(doc_results);
    });

});

// GET a specific lic
router.get('/:lic_id', function(req, res) {

    try {
        var identifier = mongojs.ObjectId(req.params.lic_id);
    } catch (error){
        res.status(400);
        res.json({message: error.message});
        return;
    }

    db.demo_test.findOne({
        _id:identifier
    }, function(err, doc_results) {
        if (err) {
            res.json(err);
        } else if ( ! doc_results) {
            res.status(404).end();
        } else {
            res.json(doc_results);
        }
    });

});

module.exports = router;
