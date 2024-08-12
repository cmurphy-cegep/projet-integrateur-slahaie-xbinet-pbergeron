const express = require('express');
const router = express.Router();

const sharp = require('sharp');
const fs = require('fs');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const HttpError = require("../HttpError");
const recetteQueries = require("../queries/RecetteQueries");

router.get('/:id_recette', (req, res, next) => {
    recetteQueries.getRecetteComplete(req.params.id_recette).then(recette => {
        res.json(recette);
    }).catch(err => {
        return next(err);
    });
})

router.get('/', (req, res, next) => {
    recetteQueries.getAllRecettes().then(recettes => {
        res.json(recettes);
    }).catch(err => {
        return next(err);
    });
});
const onePixelTransparentPngImage = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAA1JREFUGFdj+P///38ACfsD/QVDRcoAAAAASUVORK5CYII=", "base64");
router.get('/images/:id', (req, res, next) => {
    const id = req.params.id;
    const inputFilePath = './images/'+id;
    sharp(inputFilePath).toBuffer().then(data=>{
        console.log('Buffer',data);
        res.send(data);
    })
    .catch(err=>{
        res.send(onePixelTransparentPngImage);
    });

    
});
module.exports = router;
