<template>
    <div class="boxed-left">
        <h2>Nouvelle Recette</h2>
        <form @submit.prevent="login">
            <div class="form-control">
                <label for="nom">Nom de la rectte</label>
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
                <Textarea id="description" v-model="description"></Textarea>
            </div>
            <table>
                <caption>Ingredient</caption>
                <tr>
                    <th>Nom</th>
                    <th>Quantiter</th>
                    <th>Uniter</th>
                </tr>
                <Ingredient v-for="ingredient in ingredients"></Ingredient>
                <tr>
                    <td>
                        <button>Ajouter</button>
                    </td>
                </tr>
            </table>
            <table>
                <caption>Etape</caption>
                <Etape v-for="etape in etapes"></Etape>
                <tr>
                    <td>
                        <button>Ajouter</button>
                    </td>
                </tr>
            </table>
            <button>Envoyer</button>
        </form>
    </div>
</template>

<script>
import Ingredient from '../components/formulaire/IngredientRow.vue';
import Etape from '../components/formulaire/EtapeRow.vue';


export default {
    components: {
        Ingredient,
        Etape
    },
    data: function () {
        return {
            nom: '',
            cuisson: 0,
            preparation: 0,
            portions: 0,
            description: '',
            ingredients: [{},{}],
            etapes: [{},{}]
        };
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