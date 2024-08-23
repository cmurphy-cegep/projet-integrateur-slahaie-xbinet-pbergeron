const commentaireQueries = require('./queries/commentaireQueries.js');
const pool = require('./queries/DBPool.js');
jest.mock('./queries/DBPool.js');



describe("Testing Commentary", function () {
    test("expect user to be the user", async function () {
        pool.query.mockResolvedValue({
            rows: [{
                commentaire: "Premier commentaire",
                date_publication: "2020-08-20",
                id_utilisateurs: "admin"
            }]
        });
        let commentaires = await commentaireQueries.getCommentaire('Spaghetti_Carbonara');

        expect(commentaires[0].utilisateur).toBe('admin');
        
    });
    test("testing insertion of a commentary",async function () {


    });
    afterAll(async () => {
        pool.query.mockRestore();
    });
});