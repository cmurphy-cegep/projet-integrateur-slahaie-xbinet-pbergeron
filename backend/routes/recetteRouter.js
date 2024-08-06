const express = require('express');
const router = express.Router();

const HttpError = require("../HttpError");
const recetteQueries = require("../queries/RecetteQueries");

router.get('/:id_recette', (req, res, next) => {
    recetteQueries.getRecette(req.params.id_recette).then(recettes => {
        return {
            nom: recettes.nom_recette,
            tempsDePrep: recettes.temps_preparation,
            tempsDeCuit: recettes.temps_cuisson,
            portion: recettes.nb_portions,
            description: recettes.description,
            ingredients: [],
            etapes: []
        };
    }).then((jsonObj) => {
        recetteQueries.getIngredient(req.params.id_recette).then((rep) => {
            rep.forEach((element) => {
                return jsonObj.ingredients.push({
                    nom: element.id_ingrédients,
                    quantier: element.quantite,
                    mesure: element.mesure
                })
            })
            recetteQueries.getEtape(req.params.id_recette).then((rep) => {
                console.log(rep);
                rep.forEach((element) => {
                    return jsonObj.etapes.push({
                        description: element.description
                    })
                })
                res.json(jsonObj)
            })
        })
    }).catch(err => {
        return next(err);
    });
})

router.get('/', (req, res, next) => {
    recetteQueries.getAllRecette().then(recettes => {
        res.json(recettes);
    }).catch(err => {
        return next(err);
    });
});


module.exports = router;
