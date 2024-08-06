<template>
    <h2>{{nom}}</h2>
    <img src="" alt="image recette">
    <div>
        <p>Temps de préparation: {{ tempsDePrep }} minute</p>
        <p>Temps de cuisson: {{ tempsDeCuit }}</p>
        <p>Nombre de portion: {{ portion }}</p>
    </div>
    <div>
        <p v-for="parag in description">{{ parag }}</p>
    </div>
    <div>
        <h3>Ingredients</h3>
        <Ingredient v-for="ingredient in ingredients" :nom=ingredient.nom :quantier=ingredient.quantier :mesure=ingredient.mesure></Ingredient>
    </div>
    <div>
        <h3>Etapes</h3>
        <etape v-for="(etape) in etapes" :description="etape.description" :numero="etape.ordre_etape"></etape>
    </div>
    <div>
        <Note :note = 2></Note>
    </div>
    
</template>

<script>
import Ingredient from '../components/Ingredient.vue';
import Etape from '../components/Etape.vue';
import Note from '../components/Note.vue';

export default {
    components: {
        Ingredient,
        Etape,
        Note
    },
    data: function () {
        return {
            nom: '',
            tempsDePrep: 0,
            tempsDeCuit: 0,
            portion: 0,
            description: "",
            ingredients: [],
            etapes: []
        }
    },
    methods: {
        chargerRecette(recetteKey) {
            fetch("/api/recettes/" + recetteKey)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        if (response.status === 404) {
                            throw new Error("Recettes introuvable");
                        }
                        throw new Error("Erreur HTTP " + response.status);
                    }
                })
                .then((recette) => {
                    this.nom = recette.nom;
                    this.tempsDePrep = recette.tempsDePrep;
                    this.tempsDeCuit = recette.tempsDeCuit;
                    this.portion = recette.portion;
                    this.description = recette.description.split('\n');
                    this.ingredients = recette.ingredients;
                    this.etapes = recette.etapes;
                }).catch((error) => {
                    console.log("Erreur", error);
                });
        }
    },
    mounted() {
        this.chargerRecette(this.recetteKey);
    },
    props: {
        recetteKey: String
    },
}
</script>

<style scoped>
h2{
    text-align: center;
    font-size: 40px;
}
h3{
    font-size: 24px;
}
div{
    padding: 5px;
}
</style>
