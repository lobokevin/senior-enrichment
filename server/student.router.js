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
  //this works fine, but you can also make an error handler, and just do .catch(next)
  //don't know which one off the top of my head, but some of our earlier workshops
  //has examples of this.  Let me know if you want to implement something like that
  //it can save some typing
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
  Student.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    campusId: req.body.campusId
  })
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
    stud.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      campusId: req.body.campusId
    }) // whatever else
  })
  .then(function(updatedStudent){
    res.status(201).json(updatedStudent);
  })
  .catch(err => console.log('erer!!!', err));
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
