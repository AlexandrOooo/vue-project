import { postsModule } from "./postsModule";
import Vuex from "vuex";
import { photoPageModule } from "./photoPageModule";
import { favoriteModule } from "./favoriteModule";

export const store = new Vuex.Store({
    modules: {
        post: postsModule,
        photo: photoPageModule,
        favorite: favoriteModule,
    },
});
