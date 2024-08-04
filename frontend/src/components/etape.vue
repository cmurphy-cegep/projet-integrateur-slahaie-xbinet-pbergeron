<template>
    <div>
        {{ numero }} : {{ description }}
    </div>
</template>

<script>
export default {
    props: {
        numero: Number,
        description: String,
        
    }
}
</script>