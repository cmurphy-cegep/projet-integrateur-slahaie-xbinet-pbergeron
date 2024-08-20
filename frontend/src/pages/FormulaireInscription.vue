<template>
    <div class="boxed-left">
        <h2>Inscription</h2>
        <form @submit.prevent="inscription">
            <div class="form-control" :class="{ invalide: !identifiantValide }">
                <label for="utilisateur">Identifiant utilisateur:</label>
                <input id="utilisateur" v-model="utilisateur" @blur="validerIdentifiant">
                <span v-if="!identifiantValide">Veuillez entrez un identifiant valide</span>
            </div>
            <div class="form-control" :class="{ invalide: !nomValide }">
                <label for="nom">Prénom et nom de l'utilisateur:</label>
                <input id="nom" v-model="nom" @blur="validerNom">
                <span v-if="!nomValide">Veuillez entrez un prénom et un nom valide</span>
            </div>
            <div class="form-control" :class="{ invalide: !motDePasseValide}">
                <label for="motDePasse">Mot de passe:</label>
                <input type="password" id="motDePasse" v-model="motDePasse" @blur="validerMotDePasse">
                <span v-if="!motDePasseValide">Veuillez entrez un mot de passe valide</span>
            </div>
            <div class="form-control" :class="{ invalide: !motDePasseVerifValide}">
                <label for="motDePasseVérifié">Confirmer le Mot de passe:</label>
                <input type="password" id="motDePasseVérifié" v-model="motDePassevérifié" @blur="validerMotDePasseVérifié">
                <span v-if="!motDePasseVerifValide">Veuillez entrez un mot de passe valide</span>
            </div>
            <button v-bind:disabled="!identifiantValide || !motDePasseValide || !nomValide || !motDePasseVerifValide">S'inscrire</button>
        </form>
    </div>
</template>

<script>
import session from '../session.js';

export default {
    data: function () {
        return {
            utilisateur: '',
            identifiantValide: true,
            nom: '',
            nomValide: true,
            motDePasse: '',
            motDePasseValide: true,
            motDePassevérifié: '',
            motDePasseVerifValide: true
        };
    },
    methods: {
        inscription() {
            this.validerIdentifiant();
            this.validerMotDePasse();
            this.validerNom();
            this.validerMotDePasseVérifié();
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
                alert("Bienvenue, " + this.utilisateur + ".");
                this.$router.push('/');
            }).catch(Error => {
                alert(Error.message);
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
    },
    validerNom() {
        if (this.nom === '') {
            this.nomValide = false;
        } else {
            this.nomValide = true;
        }
    },
    validerMotDePasseVérifié() {
        if (this.motDePassevérifié === '') {
            this.motDePasseVerifValide = false;
        } else {
            this.motDePasseVerifValide = true;
        }
    }
    },
    watch: {
    identifiant(nouvIdentifiant) {
        this.validerIdentifiant();
    },
    motDePasse(nouvMotDePasse) {
        this.validerMotDePasse();
    },
    nom(nouvNom) {
        this.validerNom();
    },
    motDePasseVérifié(nouvMotDePasseVérifié) {
        this.validerMotDePasseVérifié();
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