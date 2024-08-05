<template>
    <div id="recette-list">
        <ListeRecette></ListeRecette>
    </div>
</template>
<script>
import LoadingSpinner from '../components/LoadingSpinner.vue';
import { fetchRecette } from '../RecetteService.js';
import ListeRecette from './listeRecette/ListeRecette.vue';

export default {
    components: {
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
        fetchProducts().then(recettes => {
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

