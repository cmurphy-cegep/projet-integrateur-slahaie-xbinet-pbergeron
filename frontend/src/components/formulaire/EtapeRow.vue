<template>
    <tr>
        <td>
            <input type="text" v-model="this.etapes[this.id].text">
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
        etapes: Array
    },
    methods: {
        supprimer(){
            if(this.etapes.length > 1){
                this.etapes.splice(this.id, 1);
            }
        },
        up(){
            if(this.etapes.length > 1 && this.id != 0){
                for (let i = 0; i < this.etapes.length; i++) {
                    if(i === this.id){
                        let temp = this.etapes[i];
                        this.etapes[i] = this.etapes[i-1];
                        this.etapes[i-1] = temp;
                        i++;
                    }
                }
            }
        },
        down(){
            if(this.etapes.length > 1 && this.id < this.etapes.length-1){
                for (let i = 0; i < this.etapes.length; i++) {
                    if(i === this.id){
                        let temp = this.etapes[i];
                        this.etapes[i] = this.etapes[i+1];
                        this.etapes[i+1] = temp;
                        i++;
                    }
                }
            }
        }
    }
}
</script>