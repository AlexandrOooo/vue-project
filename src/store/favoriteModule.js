export const favoriteModule = {
    state: () => ({
        favorites: [],
    }),
    mutations: {
        setFavorites(state, payload) {
            state.favorites = [...payload];
        },
        addFavorites(state, payload) {
            const findFavorite = state.favorites.find(
                (favorite) => favorite.id === payload.id
            );

            if (!findFavorite) {
                state.favorites = [...state.favorites, payload];
            } else {
                state.favorites = state.favorites.filter(
                    (favorite) => favorite.id !== payload.id
                );
            }
        },
    },
    getters: {},

    namespaced: true,
};
