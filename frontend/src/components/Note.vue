<template>
    <p>Note : {{ this.note }}</p>
        <form @submit.prevent="envoyerNote(recetteKey)">
        <input type="number" max="5" min="0" v-model="this.note_send">
        <button>Envoyer</button>
    </form>
</template>

<script>
import session from '../session';
export default {
    data: function () {
        return {
            note: 0,
            note_send: ''
        }
    },
    props: {
        note: Number,
        recetteKey: String     
    },
    methods: {
        chargerNote(recetteKey) {
            fetch('/api/note/' + recetteKey)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("note introuvable");   
                }
            }).then((noteRecu) => {
                if (!noteRecu) {
                    this.note = 0;
                } else {
                    this.note = noteRecu;
                }
            }).catch((error) => {
                console.log("Erreur", error);
            });
        },
        envoyerNote(recetteKey) {
            if (session.id_utilisateur == null) {
                alert("Vous devez être connecté afin de soumettre une note.")
                throw new Error("Erreur");
            }
            const envoiNote = {
                id_recette: recetteKey,
                id_utilisateur: session.id_utilisateur,
                note: parseInt(this.note_send)
            };
            fetch('/api/note', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(envoiNote)
            }
            ).then((response) => {
                if (response.ok) {
                    alert("Note envoyé.")
                    this.chargerNote(recetteKey);
                } else {
                    if (response.status == 300) {
                        alert("Vous avez déjà noter cette recette.")
                    } else  {
                        alert("Erreur lors de l'envoi de la note.")
                    }
                }
            }).catch((error) => {
                console.log("Erreur", error);
            });
        }
    },
    mounted() {
        this.chargerNote(this.recetteKey);
    },
    watch: {
        note(newNote) {
            this.note = newNote;
        }
    }
}
</script>