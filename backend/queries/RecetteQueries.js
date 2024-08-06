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

const getRecette = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM Recettes WHERE id_recette = $1`, [recette_id]
    );
    return await result.rows[0];
}
exports.getRecette = getRecette;


const getIngredient = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM liste_ingredient WHERE id_recette = $1`, [recette_id]
    );
    return await result.rows;
}
exports.getIngredient = getIngredient;

const getEtape = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM liste_etapes INNER JOIN etapes ON liste_etapes.id_etape = etapes.id_etape WHERE id_recette = $1`, [recette_id]
    );
    return await result.rows;
}
exports.getEtape = getEtape;