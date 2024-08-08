<template>
    <div class="recette">
        <img v-bind:src= "imageSrc"/>
        <div class="recette-info">
            <div class="recette-name">
                <router-link :to="recetteDetailUrl">{{ name }}</router-link>
            </div>
            <div class="recette-description">{{ desc }}</div>
        </div>
    </div>
</template>

<script>
import { addApiPrefixToPath } from '../../api_utils';

export default {
    props: {
        id: String,
        name: String,
        desc: String,
        image: String
    },
    computed: {
        recetteDetailUrl() {
            return "/recettes/" + this.id;
        },
        imageSrc() {
            return addApiPrefixToPath("/recettes/"+this.image);
        }
    }
}
</script>

<style scoped>
.product {
    margin-bottom: 20px;
    border: 1px solid black;
    padding: 10px;
    overflow: hidden;
    clear: both;
}

.product img {
    float: left;
    margin-right: 10px;
    width: 100px;
    object-fit: cover;
}

.product-info {
    float: left;
    width: 60%;
}

.product-name {
    font-weight: bold;
    font-size: 1.2em;
    margin-bottom: 5px;
}

.product-price {
    font-weight: bold;
    font-size: 1.2em;
    color: green;
}

.product-description {
    margin-top: 5px;
    font-size: 0.9em;
    color: #666;
}

.product-add-to-cart {
    float: right;
    width: 40%;
    text-align: right;
    font-size: 1.2em;
    line-height: 2em;
}
</style>
