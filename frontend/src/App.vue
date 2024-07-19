<template>
    <Entete></Entete>
    <router-view></router-view>
</template>

<script>
import { computed } from 'vue';
import Entete from './components/Entete.vue';

export default {
    components: {
        Entete
    }

}

</script>


<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}
</style>