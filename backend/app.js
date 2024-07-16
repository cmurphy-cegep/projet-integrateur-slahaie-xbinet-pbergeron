const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.get('/recettes', (req, res) => {
    res.json({nom: "test"});
  });

module.exports = app;