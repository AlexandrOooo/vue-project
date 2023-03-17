<template>
    <header class="header">
        <p><router-link to="/">Головна</router-link></p>
        <p><router-link to="/favorites">Обрані</router-link></p>
    </header>
</template>

<script></script>

<style scoped>
.header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100px;
    width: 1220px;
    margin: 0 auto;
    cursor: pointer;
    gap: 20px;
}
</style>
