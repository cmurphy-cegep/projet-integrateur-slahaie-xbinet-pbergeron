const pool = require('./DBPool');
const getImagePathForRecetteId = recetteId => `/recettes/${recetteId}/image`;
exports.getImagePathForRecetteId = getImagePathForRecetteId;

const getAllRecettes = async () => {
    const result = await pool.query(
        `SELECT recette_id, name, description
        FROM recette
        ORDER BY recette_id`
    );
}
