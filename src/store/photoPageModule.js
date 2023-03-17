export const photoPageModule = {
    state: () => ({
        photoParams: {
            idPhotoPage: "",
            photoPage: "",
            firstName: "",
            lastName: "",
        },
    }),
    mutations: {
        setPhotoParams(state, params) {
            state.photoParams.idPhotoPage = params.id;
            state.photoParams.photoPage = params.urls.full;
            state.photoParams.firstName = params.user.first_name;
            state.photoParams.lastName = params.user.last_name;
        },
    },
    getters: {},

    namespaced: true,
};
