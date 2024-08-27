const pool = require('./DBPool');

const postCommentaire = async (id_recette, id_utilisateur, commentaire) => {

    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const date = `${year}-${month}-${day} ${hours}:${minutes}`;

   let result = await pool.query(
        `INSERT INTO commentaires (commentaire,date_publication,id_recette,id_utilisateurs)
        VALUES($1,$2,$3,$4) RETURNING id_commentaire`, 
        [commentaire, date, id_recette, id_utilisateur]
    );
    let id_commentaire = result.rows[0].id_commentaire;
    return id_commentaire

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