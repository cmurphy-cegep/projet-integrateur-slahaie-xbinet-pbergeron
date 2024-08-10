const pool = require('./DBPool');

const postNote = async (id_recette) => {
    
};
exports.postNote = postNote;
const getNote = async(id_recette,id_utilisateur) => {
    const result = pool.query(
        `SELECT note FROM note 
WHERE id_recette = $1 AND id_utilisateurs = $2`, 
        [id_recette, id_utilisateur]
    );
    console.log(result);
    return result.rows[0].note;
};
exports.getNote = getNote;

function calculateAverageRating(ratings){
    let total = 0;
    let average;
    for (let i = 0; i < ratings.length; i++) {
        total += ratings[i][2];
    }
    average  = total/ratings.length;

    return average;

}
exports.calculateAverageRating = calculateAverageRating;