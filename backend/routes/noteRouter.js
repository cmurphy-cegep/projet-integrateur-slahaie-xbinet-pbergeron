const express = require('express');
const router = express.Router();



const noteQueries = require('../queries/noteQueries');

router.post('/', (req, res, next) => {
    console.log(req.body);
    const id_utilisateur = req.body.id_utilisateur;
    const id_recette = req.body.id_recette;
    const note = req.body.note;
    if (!noteQueries.userVerification(id_utilisateur)) {
        return next({ status: 300, message: "Vous n'êtes pas connecté."});
    } else {
        noteQueries.noteCheck(id_utilisateur, id_recette).then(result => {
            if (result == undefined) {
                noteQueries.postNote(id_recette, id_utilisateur, note).then( () => {
                    const respNote = noteQueries.calculateAverageRating(note);
                    res.json(respNote);
                })
            } else if (result == id_utilisateur) {
                return next({ status: 404, message: "Vous avez déjà envoyé une note"});
            }
        });
    }
   
        
})
router.get('/:id_recette', async (req, res) => {
    noteQueries.getNote(req.params.id_recette).then(note => {
        const respNote = noteQueries.calculateAverageRating(note);
        res.json(respNote);
    }).catch(error => {
        return error;
    })
});
module.exports = router;