//Tests pour les fonctionalité relier aux queries des recettes

const recetteQueries = require('./queries/RecetteQueries.js');

describe("notes testing", function () {

    test("Rating of the recipe is the same as in the DB", function () {
        let recette = recetteQueries.getRecette("Spaghetti_Carbonara");
        expect(recette.note).toEqual(2);
    });
    test("The number of rating is the same as the DB", function () {
        let countRecette = recetteQueries.getCountRating("Spaghetti_Carbonara");
        expect(countRecette).toEqual(1);
    });

});    