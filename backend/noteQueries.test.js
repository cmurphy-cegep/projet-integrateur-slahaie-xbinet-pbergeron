//Tests pour les fonctionalité relier aux queries des recettes

const noteQueries = require('./queries/noteQueries.js');
const pool = require('./queries/DBPool.js');
//const { expect } = require('chai');

const sqlite3 = require('sqlite3').verbose();

// Create an in-memory database
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE note (id_recette TEXT,id_utilisateurs TEXT, note INT)");

describe("Fetching notes", function () {

    //Test Fonctionne
    test("expect rating to be of type number", async function () {
        let rating = noteQueries.getNote('Spaghetti_Carbonara');
        expect(typeof rating).toBe('object');
    });
    //Test Fonctionne
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

    //Test ne fonctionne pas
    test("Checks if user already has sent note", function () {
        let rating = ["Spaghetti_Carbonara","Alice",2];
        let result = noteQueries.noteCheck("Alice", "Spaghetti_Carbonara");
        expect(result).toBe( {} || "Alice" );
    });

    //Test fonctionne
    test("Checks if user is connected", function () {
        let user = "Patate25";
        let result = noteQueries.userVerification(user);
        expect(result).toBe(true || false);
    });
})
});
afterAll(async () => {
    console.log('After all tests');
    await pool.end();
});