<template>
    <div>
        
        <form>
            <div>
                <h2>Inscription</h2>
                <div>
                <label for="utilisateur">Identifiant utilisateur:</label>
                <input id="utilisateur" v-model="utilisateur">
            </div>
            <div>
                <label for="nom">Prénom et nom de l'utilisateur:</label>
                <input id="nom" v-model="nom">
            </div>
            <div>
                <label for="motDePasse">Mot de passe:</label>
                <input type="password" id="motDePasse" v-model="motDePasse">
            </div>
            <button>S'inscrire</button>
            </div>
        </form>
    </div>
</template>

<script>
import session from '../session.js';

export default {
    data: function () {
        return {
            utilisateur: '',
            nom: '',
            motDePasse: ''
        };
    },
    methods: {
        inscription() {
            const user = {
                id_utilisateur: this.utilisateur,
                utilisateur: this.nom,
                motDePasse: this.motDePasse
            }

            fetch("/api/inscription", {
                method: "POST",
                body: JSON.stringify(user)
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`Erreur ${response.status}`)
                }
            })
        }
    }
}
</script>