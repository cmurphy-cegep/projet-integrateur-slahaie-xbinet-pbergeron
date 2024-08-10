//Tests pour les fonctionalité relier aux queries des recettes

const noteQueries = require('./queries/noteQueries.js');
const pool = require('./queries/DBPool.js');
//const { expect } = require('chai');

describe("Fetching notes", function () {

    afterAll(async () => {
        await pool.end(); // Close the pool after all tests are done
    });
    test("expect rating to be of type number", async function () {
        let rating = await noteQueries.getNote('Spaghetti_Carbonara', 'admin');
        expect(typeof rating).toBe('number');
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

describe("Sending notes", function () {

    test("Checks if user already has sent note", function () {
        let rating = ["Spaghetti_Carbonara","Alice",2];
        let result = noteQueries.noteCheck(rating);
        expect(result).toBe(true || false);
    });

    test("Checks if user is connected", function () {
        let user = "Patate25";
        let result = noteQueries.userVerification(user);
        expect(result).toBe(true || false);
    });
})