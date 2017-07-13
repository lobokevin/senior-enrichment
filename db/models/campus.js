'use strict';

//  Campus model
var Sequelize = require('sequelize')
var db = require('../index.js')


var Campus = db.define('campus', {
  name: Sequelize.STRING
}, {
  freezeTableName: true
})

module.exports = Campus;
