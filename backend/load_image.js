const fs = require('fs');
const pool = require('./queries/DBPool');

const loadImages = async () => {

    const productsResult = await pool.query(`SELECT recette_id FROM recettes`);

    productsResult.rows.forEach(async row => {
        const recetteId = row.recette_id;
        const imageName = row.recette_id + '.jpg';
        console.log(`recetteId: ${recetteId}, imageName: ${imageName}`);
        const imageData = fs.readFileSync('./images/' + imageName);

        await pool.query(
            `UPDATE recette SET image = $1
             WHERE product_id = $2`,
            [imageData, recetteId]
        );
    });

};
loadImages();
