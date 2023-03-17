<script>
import { mapActions, mapState, mapMutations, mapGetters } from "vuex";
import ListPosts from "../components/ListPosts.vue";
import MyInput from "../components/MyInput.vue";

export default {
    data() {
        return {
            isMounted: false,
        };
    },
    components: {
        ListPosts,
        MyInput,
    },

    methods: {
        ...mapActions({
            fetchPosts: "post/fetchPosts",
            loadMorePosts: "post/loadMorePosts",
        }),
        ...mapMutations({
            setQuerySearch: "post/setQuerySearch",
            setSearchPosts: "post/setSearchPosts",
        }),
    },
    computed: {
        ...mapState({
            posts: (state) => state.post.posts,
            querySearch: (state) => state.post.querySearch,
            searchPosts: (state) => state.post.searchPosts,
        }),
    },

    mounted() {
        if (!this.isMounted) {
            this.fetchPosts();
        }
        this.isMounted = true;

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
    watch: {
        querySearch() {
            this.setSearchPosts();
        },
        posts() {
            this.setSearchPosts();
        },
    },
};
</script>

<template>
    <my-input
        class="search"
        :model-value="querySearch"
        @update:modelValue="setQuerySearch"
    >
    </my-input>
    <list-posts :posts="searchPosts"></list-posts>
    <div ref="observer" class="observer"></div>
</template>

<style>
.search {
    position: fixed;
    left: 50px;
    top: 100px;
}
.observer {
    height: 1px;
}
</style>
