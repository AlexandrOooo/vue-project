import axios from "axios";

export const postsModule = {
    state: () => ({
        posts: [],
        page: 1,
        querySearch: "",
        searchPosts: [],
    }),

    mutations: {
        setPosts(state, posts) {
            state.posts = posts.filter((post, index, array) => {
                let count = 0;
                array.forEach((element) => {
                    element.id === post.id && count++;
                });
                if (count == 2) return false;
                return true;
            });
        },
        setQuerySearch(state, querySearch) {
            state.querySearch = querySearch;
        },
        countPage(state) {
            state.page += 1;
        },
        setSearchPosts(state) {
            state.searchPosts = state.posts.filter((post) =>
                post.user.first_name
                    .toLowerCase()
                    .includes(state.querySearch.toLowerCase())
            );
        },
    },
    getters: {},
    actions: {
        async fetchPosts({ commit }) {
            try {
                const { data } = await axios.get(
                    "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
                    {
                        params: {
                            per_page: 12,
                        },
                    }
                );
                console.log(data);
                commit("setPosts", data);
                commit("setSearchPosts");
            } catch (e) {
                console.log(e);
            }
        },
        async loadMorePosts({ state, commit }) {
            try {
                commit("countPage");
                const { data } = await axios.get(
                    "https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
                    {
                        params: {
                            per_page: 12,
                            page: state.page,
                        },
                    }
                );
                console.log(data);
                commit("setPosts", [...state.posts, ...data]);
            } catch (e) {
                console.log(e);
            }
        },
    },
    namespaced: true,
};
