<template>
    <h2>{{recetteKey}}</h2>
    <img src="" alt="image recette">
    <p>Temps de préparation</p>
    <p>Temps de cuisson</p>
    <p>Nombre de portion</p>
    <p>Description</p>
    <ingrédient></ingrédient>
    <etape></etape>
</template>

<script>
export default {
    props: {
        recetteKey: String
    },
}
</script>