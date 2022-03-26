'use strict';

const express = require('express');

const app = express();

app.use(express.json());


const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handler404 = require('./error-handlers/404.js');
const handler500 = require('./error-handlers/500.js');

app.use(express.json());
app.use(logger);

app.get('/ingredient', validator);

app.use('*', handler404);

app.use(handler500);

app.get('/', (req, res, next) => {
  res.send('Welcome to the home route!');
});

module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('App is running on PORT ' + PORT);
    });
  },
};