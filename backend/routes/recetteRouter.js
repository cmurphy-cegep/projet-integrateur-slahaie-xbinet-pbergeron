const express = require('express');
const router = express.Router();

const HttpError = require("../HttpError");

const recetteQueries = require("../queries/RecetteQueries");

router.get('/', (req, res, next) => {
    recetteQueries.getAllRecette().then(recettes => {
        res.json(recettes);
    }).catch(err => {
        return next(err);
    });
});

module.exports = router;