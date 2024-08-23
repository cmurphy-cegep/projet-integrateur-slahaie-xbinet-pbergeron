const express = require('express');
const router = express.Router();

const sharp = require('sharp');



const recetteQueries = require("../queries/RecetteQueries");

router.get('/:id_recette', (req, res, next) => {
    recetteQueries.getRecetteComplete(req.params.id_recette).then(recette => {
        res.json(recette);
    }).catch(err => {
        return next(err);
    });
})

router.post('/', (req, res, next) => {
    console.log(req.body);
})

router.get('/', (req, res, next) => {
    recetteQueries.getAllRecettes().then(recettes => {
        res.json(recettes);
    }).catch(err => {
        return next(err);
    });
});
const onePixelTransparentPngImage = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=", "base64");
router.get('/images/:id', (req, res) => {
    const id = req.params.id;
    const inputFilePath = './images/'+id;
    sharp(inputFilePath).toBuffer().then(data=>{
        res.send(data);
    })
    .catch( () =>{
        res.send(onePixelTransparentPngImage);
    });


});
module.exports = router;
