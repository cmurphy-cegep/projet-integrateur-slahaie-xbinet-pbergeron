<template>
    <div id="recette-list">
        <h2>Liste de Recettes</h2>
        <LoadingSpinner :loading="loading" :error="loadError" />
        <RecetteIndividuel v-if="!loading" v-for="recette in recettes" :key="recette.id" :id="recette.id"
            :name="recette.name" :desc="recette.desc" :image="recette.image" />
    </div>
</template>

<script>
import LoadingSpinner from '../../components/LoadingSpinner.vue';
import RecetteIndividuel from './RecetteIndividuel.vue';
import { fetchRecette } from '../../RecetteService';

export default {
    components: {
        RecetteIndividuel: RecetteIndividuel,
        LoadingSpinner: LoadingSpinner
    },
    data() {
        return {
            recettes: [],
            loading: true,
            loadError: false
        };
    },
    mounted() {
        fetchRecette().then(recettes => {
            this.recettes = recettes;
            this.loading = false;
            this.loadError = false;
        }).catch(err => {
            console.err(err);
            this.loading = false;
            this.loadError = true;
        });
    }
}
</script>

<style scoped>
#product-list {
    flex-basis: 70%;
    margin-right: 20px;
    border: 1px solid black;
    padding: 10px;
}
</style>
