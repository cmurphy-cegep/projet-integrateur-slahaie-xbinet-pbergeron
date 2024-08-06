import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import FormulaireLogin from './pages/FormulaireLogin.vue';
import RecetteDetaillee  from './pages/RecetteDetaillee.vue';
import ListeRecette from './pages/listeRecette/ListeRecette.vue'

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ListeRecette},
        { path: '/login', component: FormulaireLogin},
        { path: '/recette/:recetteKey', component: RecetteDetaillee, props: true}
    ]
});

app.use(router);

app.mount("#app");
