<template>
    <header>
        <div>
            <div class="container">
                <h1>Les Recettes de Rodrigo</h1>
                <div v-if="session.admin">administrateur</div>
                <div class="name" v-if="session.id_utilisateur"> {{ session.id_utilisateur }}</div>
            </div>
            <div class="container">
                <div>
                <router-link to="/">Accueil</router-link>
            </div>
            <div v-if="session.id_utilisateur && session.admin">
                <router-link to="/nouvelleRecette">Nouvelle recette</router-link>
            </div>
            <div v-if="session.id_utilisateur">
                <a href="" @click.prevent="session.disconnect()">Déconnexion</a>
            </div>
            <div v-else>
                <router-link to="/login">Connexion</router-link>
            </div>
        </div>
        <div>
            
        </div>
            </div>
        <div class="connexion">
            
        </div>
    </header>
</template>
<script>
import session from '../session';

export default {
    data: function() {
        return {
            session: session
        };
    },
    computed: {
        calculatedTotal() {
            const total = this.cart.calculateTotal();
            return formatCurrency(total);
        },
        calculatedTotalItems() {
            return this.cart.calculateTotalItems();
        }
    }
}
</script>




<style scoped>
.grey-title {
    color: gray;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 0rem;
}

.title {
    flex-basis: 30%;
    padding: 0.3rem;
}

.nav {
    flex-basis: 40%;
    padding-top: 10px;
}

.panier {
    flex-basis: 15%;
    padding: 0.3rem;
}

.connexion {
    flex-basis: 15%;
    text-align: right;
}

.admin {
    background-color: darkred;
    color: white;
    text-align: center;
}

.name {
    padding-top: 2px;
}
</style>