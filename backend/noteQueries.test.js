//Tests pour les fonctionalité relier aux queries des recettes

const noteQueries = require('./queries/noteQueries.js');
const pool = require('./queries/DBPool.js');
//const { expect } = require('chai');
jest.mock('./queries/DBPool.js');

const sqlite3 = require('sqlite3').verbose();


describe("Fetching notes", function () {

    //Test Fonctionne
    test("expect rating to be of type number", async function () {
        pool.query.mockResolvedValue({rows:[{note:3},{note:2}]})
        let rating = await noteQueries.getNote('Spaghetti_Carbonara');

        expect(typeof rating[0].note).toBe('number');
        
    });
    afterAll(async () => {
        pool.query.mockRestore();
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
    test('should return true if id_utilisateur is found', async () => {
        pool.query.mockResolvedValue({rows:['admin']});
        const result = await noteQueries.noteCheck('admin','Spaghetti_Carbonara');
        expect(result).toBe(true);
    });
    afterAll(async () => {
        pool.query.mockRestore();
    });

    test('should return false if id_utilisateur is not found', async () => {
        pool.query.mockResolvedValue({rows:[undefined]});
        const result = await noteQueries.noteCheck('Alice','Spaghetti_Carbonara');
        expect(result).toBe(false); 
    });
    afterAll(async () => {
        pool.query.mockRestore();
    });

    //Test fonctionne
    test("Checks if user is connected", function () {
        pool.query.mockResolvedValue({rows:['admin']});
        let user = "Patate25";
        let result = noteQueries.userVerification(user);
        expect(result).toBe(true || false);
    });
    afterAll(async () => {
        pool.query.mockRestore();
    });
})
afterAll(async () => {
    console.log('After all tests');
    await pool.end();
    pool.query.mockRestore();
});