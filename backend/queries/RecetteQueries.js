const pool = require('./DBPool');
const getImagePathForRecetteId = recetteId => `/recettes/${recetteId}/image`;
exports.getImagePathForRecetteId = getImagePathForRecetteId;

const getAllRecettes = async () => {
    const result = await pool.query(
        `SELECT nom_recette, description_courte
        FROM recettes
        ORDER BY id_recette`
    );
    return result.rows.map(row => {
        const recette = {
            name: row.nom_recette,
            desc: row.description_courte,
        };
        return recette;
    });
};
exports.getAllRecettes = getAllRecettes;
