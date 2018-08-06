const Sequelize = require('sequelize')
const db = require('../db');

const Channel = db.define('channels', {
  name: {
    type: Sequelize.STRING
  }
})

module.exports = Channel;