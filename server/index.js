const path = require('path');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const PORT = 3000;
const app = express();
// const io = require('socket.io')(server);


// require('./socket')(io);

module.exports = app;

db.sync().then(() => console.log('Database is synced'));


app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', require('./api'));


app.use((req, res, next) =>
  path.extname(req.path).length > 0 ?
    res.status(404).send('Not found') :
    next()
)


app.use((err, req, res, next) =>
  res.status(err.status || 500).send(err.message || 'Internal server error.')
);

app.listen(PORT, () => console.log(`Feeling chatty on port ${PORT}`));