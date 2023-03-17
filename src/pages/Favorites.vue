<script>
import FavoritesList from "../components/FavoritesList.vue";
import { mapState } from "vuex";
export default {
    components: { FavoritesList },
    computed: {
        ...mapState({
            favorites: (state) => state.favorite.favorites,
        }),
    },
};
</script>
<template>
    <h2>Обрані</h2>
    <favorites-list :favorites="favorites"></favorites-list>
</template>
<style scoped>
h2 {
    margin-bottom: 20px;
    margin-left: 100px;
}
</style>
