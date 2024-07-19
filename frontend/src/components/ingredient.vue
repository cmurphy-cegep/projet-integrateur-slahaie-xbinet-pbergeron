<template>
    <div>
        {{ nom }} : {{ quantier }}
    </div>
</template>

<script>
export default {
    props: {
        nom: String,
        quantier: String,
    }
}
</script>