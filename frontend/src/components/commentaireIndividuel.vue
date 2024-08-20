<template>
        <div class="recette-info">
            <div class="commentaire-container">
                <p class="commentaire-user">{{ utilisateur }} :</p>
                <p class="commentaire-text">{{commentaire}}</p>
                <p class="commentaire-date">{{date}}</p>

            </div>
        </div>
</template>

<script>

export default {
    props: {
        commentaire: String,
        utilisateur: String,
        date: Date
    }
}
</script>

<style scoped>
.recette {
    margin-bottom: 20px;
    border: 1px solid black;
    padding: 10px;
    overflow: hidden;
    clear: both;
    display: flex;
}

.recette{
    display: flex;
}
.commentaire-container {
    display: flex;
    align-items: center; 
    justify-content: space-between; 
    padding: 10px;
    border-bottom: 1px solid #ccc; 
}

.commentaire-container .commentaire-text {
    flex-grow: 1;
    margin-right: 10px;
    font-size: 1em;
}

.commentaire-container .commentaire-user {
    font-weight: bold;
    margin-right: 10px;
    font-size: 1em;
}

.commentaire-container .commentaire-date {
    color: #888;
    font-size: 0.9em;
}
</style>
