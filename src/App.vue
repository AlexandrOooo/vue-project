<script>
import HeaderLayout from "./components/HeaderLayout.vue";
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            isMounted: false,
        };
    },
    components: {
        HeaderLayout,
    },
    computed: {
        ...mapState({
            favorites: (state) => state.favorite.favorites,
        }),
    },
    methods: {
        ...mapMutations({
            setFavorites: "favorite/setFavorites",
        }),
    },
    mounted() {
        if (!this.isMounted) {
            const data = localStorage.getItem("favorite");
            const items = data ? JSON.parse(data) : [];
            this.setFavorites(items);
        }
        this.isMounted = true;
    },
    watch: {
        favorites() {
            const json = JSON.stringify(this.favorites);
            localStorage.setItem("favorite", json);
        },
    },
};
</script>

<template>
    <header-layout></header-layout>
    <router-view></router-view>
</template>

<style></style>
