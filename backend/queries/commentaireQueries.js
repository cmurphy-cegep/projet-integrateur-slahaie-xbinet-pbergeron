const pool = require('./DBPool');

const postCommentaire = async (id_recette, id_utilisateur, commentaire) => {

    await pool.query(
        `INSERT INTO commentaires (id_recette, id_utilisateurs, commentaire,date_publication)
        VALUES ($1, $2, $3, $4)`, 
        [id_recette, id_utilisateur, commentaire, Date.now()]
    );

    return postNote(id_recette);

};
exports.postCommentaire = postCommentaire;

const getCommentaire = async(id_recette) => {
    const result = await pool.query(
        `SELECT commentaire, date_publication,id_utilisateurs FROM commentaires 
        WHERE id_recette = $1`, 
        [id_recette]
    );
    return result.rows.map(row => {
        const commentaire = {
            commentaire: row.commentaire,
            utilisateur: row.id_utilisateurs,
            date: row.date_publication
        };
        return commentaire;
    });
};
exports.getCommentaire = getCommentaire;