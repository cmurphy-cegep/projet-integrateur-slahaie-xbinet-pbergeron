<template>
    <div v-if=quantier>
        {{ nom }} : {{ quantier }} {{ mesure }}
    </div>
    <div v-else=quantier>
        {{ nom }}
    </div>
</template>

<script>
export default {
    props: {
        nom: String,
        quantier: Number,
        mesure: String
    }
}
</script>