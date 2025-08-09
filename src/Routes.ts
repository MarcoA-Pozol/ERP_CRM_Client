import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import CardsContainer from './components/CardsContainer.vue';
import DataFetch from './components/DataFetch.vue';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/flashcards', component: CardsContainer },
    { path: '/dogImage', component: DataFetch },
    { path: '/:pathMatch(.*)*', component: DataFetch } // Create PageNotFoundView

];

export const router = createRouter({
    history: createWebHistory(),
    routes
});