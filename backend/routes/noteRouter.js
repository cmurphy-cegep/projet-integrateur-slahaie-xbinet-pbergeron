const express = require('express');
const router = express.Router();

const sharp = require('sharp');
const fs = require('fs');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const noteQueries = require('../queries/noteQueries');

router.post('/:id_recette', (req, res, next) => {
    noteQueries.postNote(req.params.id_recette).then(notes => {
        
    })
})
router.get('/:id_recette', (req, res, next) => {
    noteQueries.getNote.then(note => {
        res.json(note);
    }).catch(err => {
        return next(err);
    });
});