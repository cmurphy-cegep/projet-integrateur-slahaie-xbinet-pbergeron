const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler')

const commentaireQueries = require('../queries/commentaireQueries');

router.get('/:id_recette',asyncHandler(async (req, res,) => {
    const commentaires = await commentaireQueries.getCommentaire(req.params.id_recette);
        res.json(commentaires);
}));
router.post('/', asyncHandler(async (req, res) => {
    console.log(req.body);
  const  id_recette = req.body.id_recette;
  const  id_utilisateur = req.body.id_utilisateur;
  const  commentaire = req.body.commentaire

    await commentaireQueries.postCommentaire(id_recette, id_utilisateur, commentaire);
    const resCommentaires = await commentaireQueries.getCommentaire(id_recette);
    res.json(resCommentaires);
}));
module.exports = router;