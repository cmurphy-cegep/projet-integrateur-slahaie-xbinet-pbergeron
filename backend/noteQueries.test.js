//Tests pour les fonctionalité relier aux queries des recettes

const noteQueries = require('./queries/noteQueries.js');
const pool = require('./queries/DBPool.js');
//const { expect } = require('chai');

describe("Fetching notes", function () {

    test("expect rating to be of type number", async function () {
        let rating = noteQueries.getNote('Spaghetti_Carbonara');
        expect(typeof rating).toBe('object');
    });
    test("Calculating average of ratings", function () {
        let ratings = [{note: 2},
        {note: 3},
        {note: 1},
        {note: 4}, 
        {note: 5}]

        let moyenneRating = noteQueries.calculateAverageRating(ratings);

        expect(moyenneRating).toEqual(3);
    });
});

describe("Sending notes", function () {

    test("Checks if user already has sent note", function () {
        let rating = ["Spaghetti_Carbonara","Alice",2];
        let result = noteQueries.noteCheck("Alice", "Spaghetti_Carbonara");
        expect(result).toBe( {} || "Alice" );
    });

    test("Checks if user is connected", function () {
        let user = "Patate25";
        let result = noteQueries.userVerification(user);
        expect(result).toBe(true || false);
    });
})

afterAll(async () => {
    console.log('After all tests');
    await pool.end();
});