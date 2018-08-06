const db = require('./server/db');
const { User, Channel, Message } = require('./server/model');

const channels = [
  { name: 'SuperSonic' }
];

const users = [{
  name: 'Ray',
  email: 'vanmiler@gmail.com'
}];

const id = () => Math.round(Math.random() * (users.length - 1)) + 1;

const messages = [
  { userId: id(), content: 'Whats up my Ninja', channelId: 1 }
];

const seed = () =>

  Promise.all(users.map(user =>
    User.create(user))
  )
    .then(() =>
      Promise.all(channels.map(channel =>
        Channel.create(channel))
      ))
    .then(() =>
      Promise.all(messages.map(message =>
        Message.create(message))
      )
    )
  ;

const main = () => {
  console.log('Syncing db...');
  db.sync()
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
