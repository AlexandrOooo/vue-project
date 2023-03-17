import Home from "../pages/Home.vue";
import Photo from "../pages/Photo.vue";
import Favorites from "../pages/Favorites.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
        alias: "/home",
    },

    {
        path: "/photo/:id",
        component: Photo,
        props: true,
    },
    {
        path: "/favorites",
        component: Favorites,
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;
