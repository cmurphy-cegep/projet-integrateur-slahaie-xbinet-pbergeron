const pool = require('./DBPool');

const postNote = async (id_recette, id_utilisateur, note) => {

    const result = await pool.query(
        `INSERT INTO note (id_recette, id_utilisateurs, note)
        VALUES ($1, $2, $3)`, 
        [id_recette, id_utilisateur, note]
    );

    return postNote(id_recette);

};
exports.postNote = postNote;

const getNote = async(id_recette) => {
    const result = await pool.query(
        `SELECT note FROM note 
        WHERE id_recette = $1`, 
        [id_recette]
    );
    return result.rows;
};
exports.getNote = getNote;

const noteCheck = async (id_utilisateur,id_recette) => {
    const result = await pool.query(
        `SELECT id_utilisateurs FROM note 
        WHERE id_recette = $1`, 
        [id_recette]
    );
    console.log(result.rows.length);
    if (result.rows.length == 0) {
        return false;
    } else {
        for (const user of result.rows) {
            if(user == id_utilisateur){
                return true
            }
        };
        return false
    }
};
exports.noteCheck = noteCheck;

function calculateAverageRating(ratings){
    let total = 0;
    let average;
    for (let i = 0; i < ratings.length; i++) {
        total += ratings[i].note;
    }
    average  = total/ratings.length;

    return average;

}
exports.calculateAverageRating = calculateAverageRating;

function userVerification(user) {
    if (user == null) {
        return false;
    } else {
        return true;
    }
};
exports.userVerification = userVerification;