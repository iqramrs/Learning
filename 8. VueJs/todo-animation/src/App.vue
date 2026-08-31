<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header class="container">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    </header>
    
    <Transition name="route">
        <RouterView />
    </Transition>
</template>

<style scoped>
.container {
    line-height: 1.5;
    max-height: 100vh;
    gap: 10px;
    display: flex;
    max-width: 300px;
    margin: 0 auto;
}

.route-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.route-enter-to {
    opacity: 1;
    transform: translateX(0);
}
.route-enter-active{
    transition: all 0.4s ease;
}
</style>
