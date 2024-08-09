<template>
    <div class="boxed-left">
        <h2>Connexion</h2>
        <form @submit.prevent="login">
            <div class="form-control" :class="{ invalide: !identifiantValide }">
                <label for="utilisateur">Identifiant utilisateur:</label>
                <input id="utilisateur" v-model="utilisateur" @blur="validerIdentifiant">
                <span v-if="!identifiantValide">Veuillez entrez un identifiant valide</span>
            </div>
            <div class="form-control" :class="{ invalide: !motDePasseValide}">
                <label for="motDePasse">Mot de passe</label>
                <input type="password" id="motDePasse" v-model="motDePasse" @blur="validerMotDePasse">
                <span v-if="!motDePasseValide">Veuillez entrez un mot de passe valide</span>
            </div>
            <button v-bind:disabled="!identifiantValide || !motDePasseValide">Se connecter</button>
            <router-link to="/inscription">Inscription</router-link>
        </form>
    </div>
</template>

<script>
import session from '../session';

export default {
    data: function () {
        return {
            utilisateur: '',
            identifiantValide: true,
            motDePasse: '',
            motDePasseValide: true
        };
    },
    methods: {
        login() {

            this.validerIdentifiant();
            this.validerMotDePasse();
            if (!this.utilisateur || !this.motDePasse) {
                alert("Veuillez entrer un nom d'utilisateur ou un mot de passe valide.");
            } else {
                session.login(this.utilisateur, this.motDePasse).then(user => {
                alert("Bienvenue, " + user.id_utilisateur + ".");
                this.$router.push('/');
            }).catch(authError => {
                alert(authError.message);
            })
            }
            
        },
        validerIdentifiant() {
            if (this.utilisateur === '') {
                this.identifiantValide = false;
            } else {
                this.identifiantValide = true;
            }
    },
    validerMotDePasse() {
            if (this.motDePasse === '') {
                this.motDePasseValide = false;
            } else {
                this.motDePasseValide = true;
            }
    }
},
watch: {
    identifiant(nouvIdentifiant) {
        this.validerIdentifiant();
    },
    motDePasse(nouvMotDePasse) {
        this.validerMotDePasse();
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

.form-control.invalide input,
.form-control.invalide select {
    border-color: red;
}

.form-control.invalide label {
    color: red;
}
</style>