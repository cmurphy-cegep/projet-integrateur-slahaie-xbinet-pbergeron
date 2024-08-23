<template>
    <div class="boxed-left">
        <h2>Modification de la Recette: {{ nom }}</h2>
        <form @submit.prevent="">
            <div class="form-control">
                <label for="nom">Nom de la recette</label>
                <input id="nom" v-model="nom">
            </div>
            <div class="form-control">
                <label for="preparation">Temps de préparation en minutes</label>
                <input type="number" id="preparation" v-model="preparation">
            </div>
            <div class="form-control">
                <label for="cuisson">Temps de cuisson en minutes</label>
                <input type="number" id="cuisson" v-model="cuisson">
            </div>
            <div class="form-control">
                <label for="portions">Nombre de portions</label>
                <input type="number" id="portions" v-model="portions">
            </div>
            <div class="form-control">
                <label for="description">Description</label>
                <p v-for="parag in description">{{ parag }}</p>
                <Textarea id="description" v-model="description"></Textarea>
            </div>
            <table>
                <caption>Ingrédient</caption>
                <tr>
                    <th>Nom</th>
                    <th>Quantité</th>
                    <th>Unité</th>
                </tr>
                <Ingredient v-for="(ingredient, index) in ingredients" :id="index" :ingredient="ingredients"></Ingredient>
                <tr>
                    <td>
                        <button @click="ajouterIngredient">Ajouter</button>
                    </td>
                </tr>
            </table>
            <table>
                <caption>Etape</caption>
                <Etape v-for="(etape, index) in etapes" :id="index" :etapes="this.etapes"></Etape>
                <tr>
                    <td>
                        <button @click="ajouterEtape">Ajouter</button>
                    </td>
                </tr>
            </table>
            <button @click="envoyer">Envoyer</button>
        </form>
    </div>
</template>

<script>
import Ingredient from '../components/formulaire/IngredientRow.vue';
import Etape from '../components/formulaire/EtapeRow.vue';
import session from '../session';

export default {
    components: {
        Ingredient,
        Etape
    },
    data() {
        return {
            nom: '',
            cuisson: 0,
            preparation: 0,
            portions: 0,
            description: '',
            ingredients: [{nom: "", quantite: 0, mesure: ""}],
            etapes: [{description: ""}]
        };
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
                    this.preparation = recette.tempsDePrep;
                    this.cuisson = recette.tempsDeCuit;
                    this.portions = recette.portion;
                    this.description = recette.description.split('\n');
                    this.ingredients = recette.ingredients;
                    this.etapes = recette.etapes;

                }).catch((error) => {
                    console.log("Erreur", error);
                });
        },
        envoyer() {
            session.envoyerRecette(this.$data).then(() => {
                alert("Recette envoyer");
                this.$router.push('/');
            }).catch(authError => {
                alert(authError.message);
            })
        },
        ajouterEtape(){
            this.etapes.push({description: ""});
        },
        ajouterIngredient(){
            this.ingredients.push({nom: "", quantier: 0, mesure: ""})
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