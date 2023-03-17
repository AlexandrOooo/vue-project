<script>
import FavoritesItem from "./FavoritesItem.vue";
export default {
    components: { FavoritesItem },
    props: {
        favorites: {
            type: Array,
            required: true,
        },
    },
};
</script>
<template>
    <div class="favorite-list">
        <favorites-item
            v-for="favorite in favorites"
            :favorite="favorite"
            :key="favorite.id"
        />
    </div>
</template>
<style>
.favorite-list {
    width: 800px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    gap: 20px;
}
</style>
