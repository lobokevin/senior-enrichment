'use strict';

var router = require('express').Router();

var Student = require('../db/models/student');

// GET
// - all students
// other tab has students
router.get('/', function(req, res, next){
  Student.findAll({})
  .then(function(students){
    res.status(200).json(students);
  })
  .catch(err => console.log(err));
})

// - a student by id

router.get('/:id', function(req, res, next){
  Student.findById(req.params.id)
  .then(function(student){
    res.status(200).json(student);
  })
  .catch(err => console.log(err));
})

// POST

// - new student

router.post('/', function(req, res, next){
  Student.create({name: req.body.name})
  .then(function(newStudent){
    res.status(201).json(newStudent);
  })
  .catch(err => console.log(err));
})

// PUT

// - updated campus info for one campus

router.put('/:id', function(req, res, next){
  Student.findById(req.params.id)
  .then(function(stud){
    stud.update({name: req.body.name}) // whatever else
  })
  .then(function(updatedStudent){
    res.status(201).json(updatedStudent);
  })
  .catch(err => console.log(err));
})


// DELETE

// - a student
router.delete('/:id', function(req, res, next){
  Student.findById(req.params.id)
  .then(function(stud){
    stud.destroy()
  })
  .then(function(){
    res.status(204).end();
  })
  .catch(err => console.log(err))
})

module.exports = router;
