<template>
    <div>
        
        <form @submit.prevent="inscription">
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
            const userDetails = {
                id_utilisateur: this.utilisateur,
                nom: this.nom,
                motDePasse: this.motDePasse
            }
            session.inscription(userDetails).then(user => {
                alert("Bienvenue, " + user.id_utilisateurutilisateur + ".");
                this.$router.push('/');
            }).catch(authError => {
                alert(authError.message);
            })
        }
    }
}
</script>