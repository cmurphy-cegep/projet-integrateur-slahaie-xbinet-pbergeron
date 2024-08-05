const express = require('express');
const logger = require('morgan');
const HttpError = require('./HttpError');

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

app.get('/recettes', (req, res) => {
    res.json({nom: "test"});
  });


module.exports = app;

let recettes = {
  nom: 'Spagettie',
  tempsDePrep: 1,
  tempsDeCuit: 10,
  portion: 4,
  description: "C'est du spag",
  ingredients: [
      {
          nom: "pate",
          quantier: "1 boite"
      },
      {
          nom: "sause",
          quantier: "1 pot"
      }
  ],
  etapes: [
      {
          description: "faire bouillir de l'eau"
      },
      {
          description: "mettre les pate dans l'eau"
      },
      {
          description: "faire chaufer la sauce"
      },
      {
          description: "mellenger"
      }
  ]
}

app.get('/recettes/:id_recette', (req, res, next) => {
    const recette = req.params.id_recette;
    res.json(recettes);
})
