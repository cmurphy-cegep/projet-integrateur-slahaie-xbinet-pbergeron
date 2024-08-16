import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import FormulaireLogin from './pages/FormulaireLogin.vue';
import FormulaireInscription from './pages/FormulaireInscription.vue';
import RecetteDetaillee  from './pages/RecetteDetaillee.vue';
import ListeRecette from './pages/listeRecette/ListeRecette.vue'
import FormulaireNouvelleRecette from './pages/FormulaireNouvelleRecette.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ListeRecette},
        { path: '/login', component: FormulaireLogin},
        { path: '/recettes/:recetteKey', component: RecetteDetaillee, props: true},
        { path: '/inscription', component: FormulaireInscription},
        { path: '/nouvelleRecette', component: FormulaireNouvelleRecette}
    ]
});

app.use(router);

app.mount("#app");
