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
</template>

<style>
.search {
    position: fixed;
    left: 50px;
    top: 100px;
}
</style>
