const express = require('express');
const bookshelf = require('bookshelf');
const bodyparser = require('body-parser');
const knex = require('knex');

const PORT = process.env.PORT || 8008;
const server = express();
const routes = require('./db/routes');

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended : true }));

server.use('/api', routes);

server.listen(PORT, () => {
  console.log(`You are now connected to port ${PORT}.\n`)
});