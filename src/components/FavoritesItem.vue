<script>
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            isFavorite: false,
        };
    },
    props: {
        favorite: {
            type: Object,
            required: true,
        },
    },
    methods: {
        ...mapMutations({
            setPhotoParams: "photo/setPhotoParams",
            addFavorites: "favorite/addFavorites",
        }),
        onClickFavorite() {
            this.isFavorite = !this.isFavorite;
            this.addFavorites(this.favorite);
        },
    },
};
</script>
<template>
    <div class="favorite__item">
        <router-link
            @click="setPhotoParams(favorite)"
            :to="'/photo/' + favorite.id"
        >
            <img :src="favorite.urls.small" alt="" />
        </router-link>
        <p>{{ favorite.user.first_name }} {{ favorite.user.last_name }}</p>
        <button @click="onClickFavorite" class="fav-btn">
            <svg
                height="48"
                viewBox="0 0 48 48"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M0 0h48v48h-48z" fill="none" />
                <path
                    fill="teal"
                    :class="[isFavorite ? 'select' : '']"
                    d="M33 6c-3.48 0-6.82 1.62-9 4.17-2.18-2.55-5.52-4.17-9-4.17-6.17 0-11 4.83-11 11 0 7.55 6.8 13.72 17.1 23.07l2.9 2.63 2.9-2.63c10.3-9.35 17.1-15.52 17.1-23.07 0-6.17-4.83-11-11-11zm-8.79 31.11l-.21.19-.21-.19c-9.51-8.63-15.79-14.33-15.79-20.11 0-3.99 3.01-7 7-7 3.08 0 6.08 1.99 7.13 4.72h3.73c1.06-2.73 4.06-4.72 7.14-4.72 3.99 0 7 3.01 7 7 0 5.78-6.28 11.48-15.79 20.11z"
                />
            </svg>
        </button>
    </div>
</template>
<style scoped>
.favorites__item {
    width: 150px;
    height: 120px;
}
img {
    width: 150px;
    height: 90px;
}
.fav-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: -30px;
    left: -30px;
}
.select {
    fill: bisque;
}
</style>
