<template>
    <FormulaireLogin/>
    <router-view></router-view>
</template>

<script>
import FormulaireLogin from './pages/FormulaireLogin.vue';
export default {
    components: {
        FormulaireLogin
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