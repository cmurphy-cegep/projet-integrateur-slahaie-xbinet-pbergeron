<template>
    <p v-if="note == undefined">Aucune note disponible</p>
    <p v-else>Note : {{ note }}</p>
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
            note_send: ''
        }
    },
    props: {
        note: Number,
        recetteKey: String     
    },
    methods: {
        envoyerNote(recetteKey) {
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
                } else {
                    alert("Erreur lors de l'envoi de la note.")
                }
            }).catch((error) => {
                console.log("Erreur", error);
            });
        }
    }
}
</script>