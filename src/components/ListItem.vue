<script>
import { mapMutations, mapState } from "vuex";
export default {
    data() {
        return {
            isFavorite: false,
            isMounted: false,
        };
    },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    computed: {
        ...mapState({
            favorites: (state) => state.favorite.favorites,
        }),
    },
    methods: {
        ...mapMutations({
            setPhotoParams: "photo/setPhotoParams",
            addFavorites: "favorite/addFavorites",
        }),
        onClickFavorite() {
            this.isFavorite = !this.isFavorite;
            this.addFavorites(this.post);
        },
    },
    mounted() {
        if (!this.isMounted) {
            this.isFavorite = this.favorites.find(
                (item) => item.id === this.post.id
            );
        }
        this.isMounted = true;
    },
};
</script>

<template>
    <div class="list-item">
        <router-link @click="setPhotoParams(post)" :to="'/photo/' + post.id">
            <img :src="post.urls.thumb" class="list-item__top" alt="" />
        </router-link>
        <div class="list-item__bottom">
            <p>{{ post.user.first_name }}</p>
            <p>{{ post.user.last_name }}</p>
        </div>
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
.list-item {
    width: 200px;
    height: 200px;
    position: relative;
}
.list-item__top {
    height: 150px;
    width: 100%;
}
.list-item__bottom {
    display: flex;
    gap: 20px;
    margin-left: 5px;
    margin-top: 7px;
    align-items: center;
}
</style>
