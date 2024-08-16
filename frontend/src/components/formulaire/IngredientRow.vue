<template>
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