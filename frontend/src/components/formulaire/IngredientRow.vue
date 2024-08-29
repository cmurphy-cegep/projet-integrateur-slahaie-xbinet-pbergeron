<template>
    <tr>
        <td>
            <input type="text" v-model="this.ingredient[this.id].nom">
        </td>
        <td>
            <input min="0" step=".01" type="number" v-model="this.ingredient[this.id].quantier">
        </td>
        <td>
            <input type="text" v-model="this.ingredient[this.id].mesure">
        </td>
        <td>
            <button @click="up">▲</button>
        </td>
        <td>
            <button @click="down">▼</button>
        </td>
        <td>
            <button @click="supprimer">Supprimer</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: {
        id: Number,
        ingredient: Array
    },
    methods: {
        supprimer(){
            if(this.ingredient.length > 1){
                this.ingredient.splice(this.id, 1);
            } else if (this.ingredient.length = 1) {
                alert("Vous devez avoir au moins un ingrédient");
            }
        },
        up(){
            if(this.ingredient.length > 1 && this.id != 0){
                for (let i = 0; i < this.ingredient.length; i++) {
                    if(i === this.id){
                        let temp = this.ingredient[i];
                        this.ingredient[i] = this.ingredient[i-1];
                        this.ingredient[i-1] = temp;
                        i++;
                    }
                }
            }
        },
        down(){
            if(this.ingredient.length > 1 && this.id < this.ingredient.length-1){
                for (let i = 0; i < this.ingredient.length; i++) {
                    if(i === this.id){
                        let temp = this.ingredient[i];
                        this.ingredient[i] = this.ingredient[i+1];
                        this.ingredient[i+1] = temp;
                        i++;
                    }
                }
            }
        }
    }
}
</script>