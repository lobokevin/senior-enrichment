'use strict';

var router = require('express').Router();

var Campus = require('../db/models/campus');

// GET
// - all campuses

router.get('/', function(req, res, next){
  Campus.findAll({})
  .then(function(campuses){
    res.status(200).json(campuses);
  })
  .catch(err => console.log(err));
})
// - a campus by id

// POST
// - new campus

// PUT

// - updated campus info for one campus

// DELETE
// - a campus


module.exports = router;
