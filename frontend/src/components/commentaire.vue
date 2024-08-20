<template>
    <div>
        <div v-for="(commentaire) in  commentaires" :commentaire = commentaire.commentaire, :date = commentaire.date_publication></div>
    </div>
</template>

<script>
import session from '../session';
export default {
    data: function () {
        return {
            commentaire: [""],
            commentaire_send: ""
        }
    },
    props: {
        commentaires: [],
        recetteKey: String     
    },
    methods: {
        chargerCommentaire(recetteKey) {
            fetch('/api/commentaire/' + recetteKey)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("note introuvable");   
                }
            }).then((commentaireRecu) => {
                if (!commentaireRecu) {
                    this.commentaire = [];
                } else {
                    this.commentaires = commentaireRecu;
                }
            }).catch((error) => {
                console.log("Erreur", error);
            });
        },
        envoyerCommentaire(recetteKey) {
            if (session.id_utilisateur == null) {
                alert("Vous devez être connecté afin de soumettre un commentaire.")
                throw new Error("Erreur");
            }
            const envoiNote = {
                id_recette: recetteKey,
                id_utilisateur: session.id_utilisateur,
                commentaire: this.commentaire_send
            };
            fetch('/api/commentaire', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(envoiCommentaire)
            }
            ).then((response) => {
                if (response.ok) {
                    alert("Commentaire envoyé.")
                    this.chargerNote(recetteKey);
                } else {
                        alert("Erreur lors de l'envoi de la note.")
                }
            }).catch((error) => {
                console.log("Erreur", error);
            });
        }
    },
    mounted() {
        this.chargerCommentaire(this.recetteKey);
    },
    watch: {
        note(newCommentaire) {
            this.note = newCommentaire;
        }
    }
}
</script>