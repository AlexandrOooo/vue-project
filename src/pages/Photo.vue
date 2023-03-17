<template>
    <div class="page-photo">
        <img :src="photoPage" alt="" />
        <div class="page-photo__text">
            <p class="page-photo__first-name">{{ firstName }}</p>
            <p class="page-photo__last-name">{{ lastName }}</p>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            photoPage: (state) => state.photo.photoParams.photoPage,
            firstName: (state) => state.photo.photoParams.firstName,
            lastName: (state) => state.photo.photoParams.lastName,
        }),
    },
};
</script>
<style scoped>
.page-photo {
    width: 300px;
    margin: 0 auto;
}
img {
    width: 100%;
}
.page-photo__text {
    margin-top: 10px;
    gap: 15px;
    display: flex;
}
p {
    font-size: 30px;
}
</style>
