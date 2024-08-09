//Tests pour les fonctionalité relier aux queries des recettes

const noteQueries = require('./queries/noteQueries.js');

describe("Fetching notes", function () {

    test("expect rating to be of type number", function () {
        let rating = noteQueries.getNote("Spaghetti_Carbonara");
        expect(rating.note).to.be.a('number');
    });
    test("Calculating average of ratings", function () {
        let ratings = [
            ["Spaghetti_Carbonara","Alice",2],
            ["Spaghetti_Carbonara","Bob",3],
            ["Spaghetti_Carbonara","Charlie",1],
            ["Spaghetti_Carbonara","Echo",4],
            ["Spaghetti_Carbonara","Foxtrot",5]
        ];

        let moyenneRating = noteQueries.calculateAverageRating(ratings);

        expect(moyenneRating).toEqual(3);
    });
});