<script>
import { mapActions } from "vuex";
import ListItem from "./ListItem.vue";

export default {
    components: {
        ListItem,
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    methods: {
        ...mapActions({
            loadMorePosts: "post/loadMorePosts",
        }),
    },
    mounted() {
        const options = {
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                this.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
};
</script>

<template>
    <div class="list">
        <list-item v-for="post in posts" :post="post" :key="post.id" />
    </div>
    <div ref="observer" class="observer"></div>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 0 auto;
    gap: 50px;
}
.observer {
    height: 100px;
}
</style>
