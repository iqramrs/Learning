<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
    <div>
        <!-- Routerlink berfungsi untuk menavigasi ke halaman lain, sama seperti tag <a> pada HTML. Bedanya, RouterLink tidak akan melakukan refresh halaman ketika berpindah halaman. -->
        <RouterLink active-class="active" to="/">Home</RouterLink>
        <!-- atribut active-class berfungsi untuk menambahkan class tertentu ketika halaman yang dituju sedang aktif. -->
        <RouterLink active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
div{
    display: flex;
    gap: 10px;
}

.active{
    color: white;
    background-color: red;
    font-weight: 900;
    padding: 5px 10px;
    border-radius: 5px;
    text-decoration: none;
}
</style>