<template>
    <div class="boxed-left">
        <h2>Nouvelle Recette</h2>
        <form @submit.prevent="">
            <div class="form-control" :class="{invalide: !idValide}">
                <label for="id">Id de la recette</label>
                <input id="id" v-model="id" @blur="validerId">
                <span v-if="!idValide">Veuillez entrez un identifiant de recette</span>
            </div>
            <div class="form-control" :class="{invalide: !nomValide}">
                <label for="nom">Nom de la recette</label>
                <input id="nom" v-model="nom" @blur="validerNom">
                <span v-if="!nomValide">Veuillez entrez un nom de recette</span>
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
                <p>Description</p>
                <textarea style="width: 476px; height: 114px;" id="description" v-model="description"></textarea>
            </div>
            <table>
                <caption>Ingredient</caption>
                <tr>
                    <th>Nom</th>
                    <th>Quantité</th>
                    <th>Unité</th>
                </tr>
                <p v-if="ingredients.length == 0">Aucun ingrédient</p>
                <Ingredient v-else v-for="(ingredient, index) in ingredients" :id="index" :ingredient="ingredients"></Ingredient>
                <tr>
                    <td>
                        <button @click="ajouterIngredient">Ajouter</button>
                    </td>
                </tr>
            </table>
            
            <table>
                <caption>Etape</caption>
                <p v-if="etapes.length == 0">Aucune étape</p>
                <Etape v-else v-for="(etape, index) in etapes" :id="index" :etapes="this.etapes"></Etape>
                <tr>
                    <td>
                        <button @click="ajouterEtape">Ajouter</button>
                    </td>
                </tr>
            </table>
            <button v-bind:disabled="!nomValide || !ingredientsValide || !etapesValide" @click="envoyer">Envoyer</button>
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
            id: '',
            idValide: true,
            nom: '',
            nomValide: true,
            cuisson: 0,
            preparation: 0,
            portions: 0,
            description: '',
            ingredients: [],
            ingredientsValide: true,
            etapes: [],
            etapesValide: true
        };
    },
    methods: {
        envoyer() {
            if (!this.idValide || !this.nomValide || !this.ingredientsValide || !this.etapesValide) {
                alert("Information non valides");
                this.idValide = false;
                this.nomValide = false;
                this.ingredientsValide = false;
                this.etapesValide = false;
            }
            if (this.etapes.length == 0 || this.ingredients.length == 0 ) {
                alert("Vous devez avoir au moins un ingédient et une étape");
                this.ingredientsValide = false;
                this.etapesValide = false;
            } else {
            session.envoyerRecette(this.$data).then(() => {
                alert("Recette envoyer");
                this.$router.push('/');
            }).catch(authError => {
                alert(authError.message);
            })
        }
        },
        ajouterEtape(){
            this.etapes.push({description: ""});
        },
        ajouterIngredient(){
            this.ingredients.push({nom: "", quantier: 0, mesure: ""})
        },
        validerId() {
            if (this.id === '') {
                this.idValide = false;
            } else {
                this.idValide = true;
            }
        },
        validerNom() {
            if (this.nom === '') {
                this.nomValide = false;
            } else {
                this.nomValide = true;
            }
        },
        valideringredients() {
            if (this.ingredients.entries.arguments == '' || null) {
                this.ingredientsValide = false;
            } else {
                this.ingredientsValide = true;
            }
        },
        validerEtapes() {
            if (this.etapes.entries.arguments == '' || null) {
                this.etapesValide = false;
            } else {
                this.etapesValide = true;
            }
        }
    },
    watch: {
        id(nouvId) {
            this.validerId();
        },
        nom(nouvNom) {
            this.validerNom();
        },
        ingredient(nouvIngredient) {
            this.valideringredients();
        },
        etape(nouvEtape) {
            this.validerEtapes();
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