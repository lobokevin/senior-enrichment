'use strict';

//  Student model
var Sequelize = require('sequelize')
var db = require('../index.js')


var Student = db.define('student', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: Sequelize.STRING
}, {
  freezeTableName: true
})

module.exports = Student;
