const commentaireQueries = require('./queries/commentaireQueries.js');
const pool = require('./queries/DBPool.js');




describe("Testing Commentary", function () {
    test("testing insertion of a commentary",async function () {
        let id_recette = 'Spaghetti_Carbonara';
        let id_utilisateur = 'admin';
        let commentaire = 'deuxième commentaire';
        let results = await pool.query(
            `SELECT MAX(id_commentaire) FROM commentaires`
        );
        let max = results.rows[0].max;
        let id_commentaire  = await commentaireQueries.postCommentaire(id_recette,id_utilisateur,commentaire);

        expect(id_commentaire).toBe(max + 1);

    });
    afterAll(async () => {
        await pool.end();
    });
});