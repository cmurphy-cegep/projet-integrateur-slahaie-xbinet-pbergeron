<template>
    <div>
        <form @submit.prevent="envoyerCommentaire(recetteKey)">
            <div>
                <textarea id="commentaire" name="commentaire" rows="4" cols="50" v-model="commentaire_send"></textarea>
            </div>    
            <button>Commentez</button>
        </form>
        <commentaireIndividuel 
            v-for="(commentaire, index) in commentaires" 
            :key="index"
            :utilisateur="commentaire.utilisateur" 
            :commentaire="commentaire.commentaire"
            :date="commentaire.date" />
    </div>
</template>

<script>
import session from '../session';
import commentaireIndividuel from './commentaireIndividuel.vue';

export default {
    components: {
        commentaireIndividuel
    },
    data: function () {
        return {
            commentaires: [],
            commentaire_send: ""
        }
    },
    props: {
        recetteKey: String     
    },
    methods: {
        chargerCommentaire(recetteKey) {
            fetch('/api/commentaire/' + recetteKey)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Un probleme est survenu");   
                }
            }).then((commentaireRecu) => {
                this.commentaires = commentaireRecu || [];
            }).catch((error) => {
                console.log("Erreur", error);
            });
        },
        envoyerCommentaire(recetteKey) {
    if (!session.id_utilisateur) {
        alert("Vous devez être connecté afin de soumettre un commentaire.");
        return;
    }

    const envoiCommentaire = {
        id_recette: recetteKey,
        id_utilisateur: session.id_utilisateur,
        commentaire: this.commentaire_send
    };

    fetch('/api/commentaire/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(envoiCommentaire)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return response.text().then(text => { throw new Error(text); });
        }
    })
    .then(() => {
        alert("Commentaire envoyé.");
        this.chargerCommentaire(recetteKey);
        this.commentaire_send = '';
    })
    .catch(error => {
        console.error("Erreur lors de l'envoi du commentaire:", error);
        alert("Erreur lors de l'envoi du commentaire. Veuillez réessayer.");
    });
}
    },
    mounted() {
        this.chargerCommentaire(this.recetteKey);
    }
}
</script>