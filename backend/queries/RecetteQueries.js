const pool = require('./DBPool');
const getImagePathForRecetteId = recetteId => `/images/${recetteId}.jpeg`;
exports.getImagePathForRecetteId = getImagePathForRecetteId;

const addImagePathToRecette = recette => {
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
    recettes = await getRecette(recette_id);
    ingredientsData = await getIngredient(recette_id);
    etapeData = await getEtape(recette_id);
    recetteComplete = {
        nom: recettes.nom_recette,
        image: '/images/' + recettes.image,
        tempsDePrep: recettes.temps_preparation,
        tempsDeCuit: recettes.temps_cuisson,
        portion: recettes.nb_portions,
        description: recettes.description,
        ingredients: [],
        etapes: []
    }
    ingredientsData.forEach((element) => {
        recetteComplete.ingredients.push({
            nom: element.nom_ingredient,
            quantier: element.quantite,
            mesure: element.mesure
        });
    });

    etapeData.forEach((element) => {
        return recetteComplete.etapes.push({
            description: element.description,
            ordre_etape: element.ordre_etape
        });
    });
    return recetteComplete;
}
exports.getRecetteComplete = getRecetteComplete;

const getRecette = async (recette_id) => {
    const result = await pool.query(
        `SELECT * FROM Recettes WHERE id_recette = $1`, [recette_id]
    );
    return await result.rows[0];
}
exports.getRecette = getRecette;


const updateRecette = async(recette) => {
    await pool.query(
        `UPDATE Recettes SET nom_recette = $1, description_courte = $2, description = $3, 
        temps_preparation = $4, temps_cuisson = $5,
         nb_portions = $6, image = $7 where id_recette = $8`,
            [recette.nom, recette.description, 
            recette.description,recette.preparation, recette.cuisson,
            recette.portions, recette.id + ".jpeg", recette.id])
    await pool.query(
        `Delete from liste_ingredient where id_recette = $1`,
            [recette.id])
    await pool.query(
        `Delete from liste_etapes where id_recette = $1`,
            [recette.id])
    recette.ingredients.forEach((i) => addIngredient(recette, i))
    for (let i = 0; i < recette.etapes.length; i++) {
        addEtape(recette, recette.etapes[i], i+1);  
    }
}
exports.updateRecette = updateRecette;


const addRecette = async(recette) => {
    await pool.query(
    `INSERT INTO Recettes (id_recette, nom_recette, 
        description_courte, description, temps_preparation,
        temps_cuisson, nb_portions, image) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [recette.id, recette.nom, recette.description, 
        recette.description,recette.preparation, recette.cuisson,
        recette.portions, recette.id + ".jpeg"])
    recette.ingredients.forEach((i) => addIngredient(recette, i))
    for (let i = 0; i < recette.etapes.length; i++) {
        addEtape(recette, recette.etapes[i], i+1);  
    }
}
exports.addRecette = addRecette;

const addIngredient = async (recette, ingredient) => {
    if((await pool.query(`SELECT * FROM ingrédients where id_ingrédients = $1`, [ingredient.nom])).rowCount == 0){
        await pool.query(
            `INSERT INTO ingrédients (id_ingrédients, nom_ingredient) 
                VALUES ($1, $2)`, [ingredient.nom, ingredient.nom])
    }
    await pool.query(
        `INSERT INTO liste_ingredient (id_recette, id_ingrédients,
        quantite, mesure) 
            VALUES ($1, $2, $3, $4)`, 
            [recette.id, ingredient.nom, ingredient.quantier, ingredient.mesure])
}

const addEtape = async (recette, etape, nb) => {
    let id_etape = nb + "-" + recette.id;
    if((await pool.query(`SELECT * from etapes where id_etape = $1`, [id_etape])).rowCount != 0){
        await pool.query(`Delete from etapes where id_etape = $1`,[id_etape])
    }
    await pool.query(
        `INSERT INTO etapes (id_etape, description, ordre_etape) 
            VALUES ($1, $2, $3)`, [id_etape, etape.description, nb])
    await pool.query(
        `INSERT INTO liste_etapes (id_recette, id_etape) 
            VALUES ($1, $2)`,
            [recette.id, id_etape])
}

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

const supprimerRecette = async (idRecette) => {
    await pool.query(
        `DELETE FROM recettes
        WHERE id_recette = $1`,
        [idRecette]
    );
}
exports.supprimerRecette = supprimerRecette;
