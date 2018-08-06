const Sequelize = require('sequelize')
const db = require('../db')
// const User = require('./user')

const Message = db.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
  // }, {
  //     defaultScope: {
  //       include: [
  //         { association: User }
  //       ]
  //     }
})

module.exports = Message;