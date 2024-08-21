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
router.post('/', (req, res) => {
    console.log(req.body);
  const  id_recette = req.body.id_recette;
  const  id_utilisateur = req.body.id_utilisateur;
  const  commentaire = req.body.commentaire

  const resCommentaire = commentaireQueries.postCommentaire(id_recette, id_utilisateur, commentaire);

  res.json(resCommentaire);
});
module.exports = router;