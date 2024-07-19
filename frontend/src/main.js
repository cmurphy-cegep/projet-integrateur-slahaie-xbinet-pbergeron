import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import FormulaireLogin from './pages/FormulaireLogin.vue';
import RecetteDetaillee  from './pages/RecetteDetaillee.vue';

const app = createApp(App);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', component: FormulaireLogin},
        { path: '/recettes/:recetteKey', component: RecetteDetaillee, props: true}
    ]
});

app.use(router);

app.mount("#app");
