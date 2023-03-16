//importo le funzioni di Vue Router
import { createRouter, createWebHistory } from 'vue-router';

//importo le pagine che voglio usare
import HomePage from '../pages/HomePage.vue';
import DetailPage from '../pages/DetailPage.vue';

//creo un router e definisco le rotte
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/projects/:id', name: 'DetailPage', component: DetailPage }
    ]
});

export { router };