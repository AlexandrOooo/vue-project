<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text" />
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style scoped>
.input {
    width: 200px;
    border: 1px solid rgb(36, 53, 53);
    padding: 10px 15px;
}
</style>
