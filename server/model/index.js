const User = require('./user')
const Message = require('./message')
const Channel = require('./channels')

User.hasMany(Message)
Message.belongsTo(User)
Channel.hasMany(Message)
Message.belongsTo(Channel)

module.exports = {
  User,
  Message,
  Channel
};