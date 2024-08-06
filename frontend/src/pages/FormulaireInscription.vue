<template>
    <div>
        <h2>Inscription</h2>
        <form>
            <div>
                <label for="utilisateur">Identifiant utilisateur:</label>
                <input id="utilisateur" v-model="utilisateur">
            </div>
            <div>
                <label for="nom">Nom de l'utilisateur:</label>
                <input id="nom" v-model="nom">
            </div>
            <div>
                <label for="motDePasse">Mot de passe:</label>
                <input type="password" id="motDePasse" v-model="motDePasse">
            </div>
            <button>Se connecter</button>
        </form>
    </div>
</template>