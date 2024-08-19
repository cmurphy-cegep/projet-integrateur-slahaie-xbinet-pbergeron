const express = require('express');
const router = express.Router();

const commentaireQueries = require('../queries/commentaireQueries');

router.get('/:id_recette', (req, res, next) => {
    commentaireQueries.getCommentaire(req.params.id_recette).then(commentaires => {
        res.json(commentaires);
    }).catch(error => {
        return next(error);
    })
});
module.exports = router;