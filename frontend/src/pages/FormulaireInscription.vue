<template>
    <div>
        
        <form @submit.prevent="inscription">
            <div class="boxed-left">
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
            <div>
                <label for="motDePasse">Confirmer le Mot de passe:</label>
                <input type="password" id="motDePasse" v-model="motDePassevérifié">
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
            motDePasse: '',
            motDePassevérifié: ''
        };
    },
    methods: {
        inscription() {
            if (!this.utilisateur || !this.nom || !this.motDePasse || !this.motDePassevérifié) {
                alert("Veuillez remplir les champs ci-dessous");
            } else if (this.motDePasse != this.motDePassevérifié) {
                alert("Votre mot de passe doit être le même pour les deux champs.");
            } else {
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
}
</script>

<style scoped>
form * {
    margin: 0.3rem;
}

.boxed-left {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: left;
    width: 90%;
    max-width: 80rem;
}
</style>