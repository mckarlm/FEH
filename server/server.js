const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const Redis = require('connect-redis')(session);
const passport = require('passport');

const PORT = process.env.PORT || 8008;
const server = express();
const routes = require('./routes');

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended : true }));
server.use((req, res, next) => {
  next()
});
server.use(
  session({
    store: new Redis(),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);

server.use(passport.initialize());
server.use(passport.session());


server.use('/api', routes);

server.listen(PORT, () => {
  console.log(`You are now connected to port ${PORT}.\n`)
});