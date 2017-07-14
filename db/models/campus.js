'use strict';

//  Campus model
var Sequelize = require('sequelize')
var db = require('../index.js')


var Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    unique: true
  }
}, {
  freezeTableName: true
})

module.exports = Campus;
