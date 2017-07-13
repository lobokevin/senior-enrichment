'use strict';

var router = require('express').Router();

var Campus = require('../db/models/campus');

// GET
// - all campuses
// home screen should have campuses
router.get('/', function(req, res, next){
  Campus.findAll({})
  .then(function(campuses){
    res.status(200).json(campuses);
  })
  .catch(err => console.log(err));
})

// - a campus by id

router.get('/:id', function(req, res, next){
  Campus.findById(req.params.id)
  .then(function(campus){
    res.status(200).json(campus);
  })
  .catch(err => console.log(err));
})

// POST
// - new campus
router.post('/', function(req, res, next){
  Campus.create({name: req.body.name})
  .then(function(newCampus){
    res.status(201).json(newCampus);
  })
  .catch(err => console.log(err));
})

// PUT //check Charles
// - updated campus info for one campus
router.put('/:id', function(req, res, next){
  Campus.findById(req.params.id)
  .then(function(campus){
    campus.update({name: req.body.name})
  })
  .then(function(updatedCampus){
    res.status(201).json(updatedCampus);
  })
  .catch(err => console.log(err));
})

// DELETE
// - a campus
router.delete('/:id', function(req, res, next){
  Campus.findById(req.params.id)
  .then(function(campus){
    campus.destroy()
  })
  .then(function(){
    res.status(204).end();
  })
  .catch(err => console.log(err))
})


module.exports = router;
