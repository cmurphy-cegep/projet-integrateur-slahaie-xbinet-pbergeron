<template>
    <h2>{{nom}}</h2>
    <img src="" alt="image recette">
    <p>Temps de préparation: {{ tempsDePrep }} minute</p>
    <p>Temps de cuisson: {{ tempsDeCuit }}</p>
    <p>Nombre de portion: {{ portion }}</p>
    <p>{{ description }}</p>
    <Ingredient v-for="ingredient in ingredients" :nom=ingredient.nom :quantier=ingredient.quantier></Ingredient>
    <etape v-for="(etape, id) in etapes" :numero="id+1" :description="etape.description"></etape>
</template>

<script>
import Ingredient from '../components/ingredient.vue';
import Etape from '../components/etape.vue';

export default {
    components: {
        Ingredient,
        Etape
    },
    data: function () {
        return {
            nom: 'Spagettie',
            tempsDePrep: 1,
            tempsDeCuit: 10,
            portion: 4,
            description: "C'est du spag",
            ingredients: [
                {
                    nom: "pate",
                    quantier: "1 boite"
                },
                {
                    nom: "sause",
                    quantier: "1 pot"
                }
            ],
            etapes: [
                {
                    description: "faire bouillir de l'eau"
                },
                {
                    description: "mettre les pate dans l'eau"
                },
                {
                    description: "faire chaufer la sauce"
                },
                {
                    description: "mellenger"
                }
            ]
        }
    },
    props: {
        recetteKey: String
    },
}
</script>