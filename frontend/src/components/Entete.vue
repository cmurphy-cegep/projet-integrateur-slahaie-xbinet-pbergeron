<template>
    <header>
        <div class="container">
            <div class="title">
                <h1 class="grey-title">Rodrigo</h1>
                <router-link to="/">Accueil</router-link> 
            </div>
            <div class="session">
                <router-link to="/login">Connextion</router-link>
            </div>
        </div>
    </header>
</template>






<style scoped>
.grey-title {
    color: gray;
}

.container {
    display: flex;
    justify-content: space-between;
    padding: 0rem;
}

.title {
    flex-basis: 30%;
    padding: 0.3rem;
}

.session {
    flex-basis: 15%;
    padding: 1.5rem;
}
</style>