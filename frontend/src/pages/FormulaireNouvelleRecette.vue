<template>
    <div class="boxed-left">
        <h2>Nouvelle Recette</h2>
        <form @submit.prevent="login">
            <div class="form-control">
                <label for="nom">Nom de la rectte</label>
                <input id="nom" v-model="nom">
            </div>
            <div class="form-control">
                <label for="temps">Temps de préparation en minutes</label>
                <input type="number" id="temps" v-model="temps">
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
                <tr>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <input type="number">
                    </td>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <button>▲</button>
                    </td>
                    <td>
                        <button>▼</button>
                    </td>
                    <td>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button>Ajouter</button>
                    </td>
                </tr>
            </table>
            <table>
                <caption>Etape</caption>
                <tr>
                    <td>
                        <input type="text">
                    </td>
                    <td>
                        <button>▲</button>
                    </td>
                    <td>
                        <button>▼</button>
                    </td>
                    <td>
                        <button>Supprimer</button>
                    </td>
                </tr>
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
export default {
    data: function () {
        return {
            nom: '',
            temps: '',
            portions: '',
            description: ''
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