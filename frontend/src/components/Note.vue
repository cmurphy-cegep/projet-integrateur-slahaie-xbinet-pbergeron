<template>
    <p>Note : {{ note }} sur 5</p>
    <form action="">
        <input type="number" max="5" min="0">
        <button>Envoyer</button>
    </form>
</template>

<script>
export default {
    props: {
        note: Number,       
    }
}
</script>