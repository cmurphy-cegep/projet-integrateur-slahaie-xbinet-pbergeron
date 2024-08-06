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

const getRecette = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM Recettes WHERE id_recette = $1`, [recette_id]
    );
    return await result.rows[0];
}
exports.getRecette = getRecette;


const getIngredient = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM liste_ingredient INNER JOIN ingrédients ON ingrédients.id_ingrédients = liste_ingredient.id_ingrédients
         WHERE id_recette = $1 ORDER BY nom_ingredient`, [recette_id]
    );
    return await result.rows;
}
exports.getIngredient = getIngredient;

const getEtape = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM liste_etapes INNER JOIN etapes ON liste_etapes.id_etape = etapes.id_etape 
        WHERE id_recette = $1 ORDER BY ordre_etape `, [recette_id]
    );
    return await result.rows;
}
exports.getEtape = getEtape;
