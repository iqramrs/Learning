<script setup>
import products from "../data/products.json";
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <p>Check out our latest products:</p>
        <ul>
            <li v-for="product in products" :key="product.id">
                <RouterLink :to="`/products/${product.id}`">{{
                    product.name
                }}</RouterLink>
            </li>
        </ul>
    </div>
</template>
