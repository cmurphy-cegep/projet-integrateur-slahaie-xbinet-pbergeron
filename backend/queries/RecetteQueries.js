const pool = require('./DBPool');
const getImagePathForRecetteId = recetteId => `/images/${recetteId}.jpeg`;
exports.getImagePathForRecetteId = getImagePathForRecetteId;

const addImagePathToRecette = recette => {
    console.log(getImagePathForRecetteId(recette.id))
    return {
        id: recette.id,
        name: recette.name,
        desc: recette.desc,
        image: getImagePathForRecetteId(recette.id),
    };
};

const getAllRecettes = async () => {
    const result = await pool.query(
        `SELECT id_recette,nom_recette, description_courte,image
        FROM recettes
        ORDER BY id_recette`
    );
    return result.rows.map(row => {
        const recette = {
            id: row.id_recette,
            name: row.nom_recette,
            desc: row.description_courte,
            image: row.image,
        };
        const recetteWithImagePath = addImagePathToRecette(recette);
        return recetteWithImagePath;
    });
};
exports.getAllRecettes = getAllRecettes;

const getRecetteComplete = async (recette_id) => {
    return getRecette(recette_id).then(recettes => {
        return {
            nom: recettes.nom_recette,
            image: '/images/' + recettes.image,
            tempsDePrep: recettes.temps_preparation,
            tempsDeCuit: recettes.temps_cuisson,
            portion: recettes.nb_portions,
            description: recettes.description,
            ingredients: [],
            etapes: []
        };
    }).then((jsonObj) => {
        return getIngredient(recette_id).then((rep) => {
            rep.forEach((element) => {
                jsonObj.ingredients.push({
                    nom: element.nom_ingredient,
                    quantier: element.quantite,
                    mesure: element.mesure
                })
            })
            return getEtape(recette_id).then((rep) => {
                rep.forEach((element) => {
                    return jsonObj.etapes.push({
                        description: element.description,
                        ordre_etape: element.ordre_etape
                    })
                })
                return jsonObj;
            })
        })
    });
}
exports.getRecetteComplete = getRecetteComplete;

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
const getRecetteImageContent = async () => {
    const result = await pool.query(
        `SELECT image FROM recettes WHERE id_recette = $1`,
        [recetteId]
    );

    const row = result.rows[0];
    if (row) {
        return {
            imageContent: row.image,
        };
    }

    return undefined;
};
exports.getRecetteImageContent = getRecetteImageContent;
