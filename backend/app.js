const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

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