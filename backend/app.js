const express = require('express');
const logger = require('morgan');

const recettesRouter = require('./routes/recettesRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/recettes', recettesRouter);

module.exports = app;