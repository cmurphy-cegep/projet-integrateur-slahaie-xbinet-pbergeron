const express = require('express');
const logger = require('morgan');
const HttpError = require('./HttpError');

const recettesRouter = require('./routes/recettesRouter');

const app = express();
const recetteRouter = require('./routes/recetteRouter');

app.use(logger('dev'));
app.use(express.json());
app.use('/recettes', recetteRouter)

app.use((err, req, res, next) => {
  console.log("error handler: ", err);
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500)
  if (err instanceof HttpError) {
    res.json(err.getJsonMessage());
  } else {
    res.json(err);
  }
});

app.use('/recettes', recettesRouter);

module.exports = app;
