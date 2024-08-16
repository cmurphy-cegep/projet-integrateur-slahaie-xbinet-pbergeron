<template>
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
</template>

<script>
export default {
    props: {
        text: String,
    }
}
</script>