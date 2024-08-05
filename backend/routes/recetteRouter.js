const express = require('express');
const router = express.Router();

const HttpError = require("../HttpError");
const recetteQueries = require("../queries/RecetteQueries");

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

router.get('/:id_recette', (req, res, next) => {
    const recette = req.params.id_recette;
    res.json(recettes);
})

router.get('/', (req, res, next) => {
    recetteQueries.getAllRecette().then(recettes => {
        res.json(recettes);
    }).catch(err => {
        return next(err);
    });
});


module.exports = router;
