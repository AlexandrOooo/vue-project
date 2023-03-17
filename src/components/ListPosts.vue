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
};
</script>

<template>
    <div class="list">
        <list-item v-for="post in posts" :post="post" :key="post.id" />
    </div>
</template>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
    margin: 0 auto;
    gap: 50px;
}
</style>
