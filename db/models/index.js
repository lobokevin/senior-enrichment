'use strict';

// Require all the models
// Running each model (i.e. table) module (i.e. file) registers each model into our sequelize db so any other part of the application could call db.model('user') OR db.models.user to get access to the `user` model.
// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
// This is an acceptable pattern but it does have limitations in that if you change the name of the model you will have to change every time it is requeired everywhere

var Sequelize = require('sequelize')
const Student = require('./student')
const Campus = require('./campus')

Campus.hasMany(Student, {
  as: 'campus_id'
  // onDelete: 'cascade', // remove all associated stories
  // hooks: true // makes the cascade actually work. Yay Sequelize!
});

// Student.belongsTo(Campus);

//
// Student.create({
//   name: 'Kevin Lobo',
//   email: 'klobo@ilstu.edu'
// })


// var person = Student.build({
//   name: 'Kevin Lobo',
//   email: 'klobo@ilstu.edu'
// })
//
// person.save()
// .then(function(p){
//   console.log(p);
// })
// .catch();


// var cam = Campus.build({
//   name: 'Chicago'
// })
//
// cam.save()
// .then(function(c){
//   console.log(c);
// })
// .catch();

module.exports = {Student, Campus}
