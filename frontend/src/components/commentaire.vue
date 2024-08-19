<template>
    <div>
        <form @submit.prevent="envoyerCommentaire(recetteKey)">
        <div>
        <textarea id="commentaire" name="commentaire" rows="4" cols="50" v-model="this.commentaire_send"></textarea>
        </div>    
        <button type="submit">Commentez</button>
        </form>
        <commentaireIndividuel v-for="commentaire in commentaires" :utilisateur="commentaire.utilisateur" :commentaire="commentaire.commentaire"
            :date="commentaire.date" />
    </div>
</template>

<script>
import session from '../session';
import commentaireIndividuel from './commentaireIndividuel.vue';
export default {
    components: {
        commentaireIndividuel: commentaireIndividuel
    },
    data: function () {
        return {
            commentaires: [],
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
                    throw new Error("Un probleme est survvenu");   
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
            const envoiCommentaire = {
                id_recette: recetteKey,
                id_utilisateur: session.id_utilisateur,
                commentaire: this.commentaire_send
            };
            fetch('/api/commentaire'+ recetteKey, {
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
                        alert("Erreur lors de l'envoi du commentaire.")
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
        commentaire(newCommentaire) {
            this.commentaire = newCommentaire;
        }
    }
}
</script>