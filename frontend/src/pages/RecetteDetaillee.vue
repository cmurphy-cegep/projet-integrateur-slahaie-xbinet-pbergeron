<template>
    <h2>{{nom}}</h2>
    <div class="infoGeneral">
        <img v-bind:src= "imageSrc"/>
        <div>
            <p>Temps de préparation: {{ tempsDePrep }} minute</p>
            <p>Temps de cuisson: {{ tempsDeCuit }} minute</p>
            <p>Nombre de portion: {{ portion }}</p>
        </div>
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
        <Note :note :recetteKey></Note>
    </div>
    <div>
        <Commentaire :commentaire :recetteKey></Commentaire>
    </div>
    
</template>

<script>
import Ingredient from '../components/ingredient.vue';
import Etape from '../components/etape.vue';
import Note from '../components/Note.vue';
import commentaire from '../components/commentaire.vue';
import { addApiPrefixToPath } from '../api_utils';

export default {
    components: {
        Ingredient,
        Etape,
        Note,
        Commentaire
        
    },
    data: function () {
        return {
            nom: '',
            image: '',
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
                    this.image = recette.image;
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
    computed: {
        imageSrc() {
            return addApiPrefixToPath("/recettes/"+this.image);
        }
    }
}
</script>

<style scoped>
h2{
    text-align: center;
    font-size: 40px;
}
img{
    width: 30%;
    padding: 10px;
}
.infoGeneral{
    display: flex;
    align-items: center;
}
h3{
    font-size: 24px;
}
div{
    padding: 5px;
}
</style>
