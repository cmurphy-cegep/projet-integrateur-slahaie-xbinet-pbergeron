<template>
    <div class="boxed-left">
        <form>
            <div>
                <label for="utilisateur">Identifiant utilisateur:</label>
                <input id="utilisateur" v-model="utilisateur">
            </div>
            <div>
                <label for="motDePasse">Mot de passe</label>
                <input type="password" id="motDePasse" v-model="motDePasse">
            </div>
            <button>Se connecter</button>
        </form>
    </div>
</template>

<script>
import session from '../session';

export default {
    data: function () {
        return {
            utilisateur: '',
            motDePasse: ''
        };
    },
    methods: {
        
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