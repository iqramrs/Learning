<script setup>
import { useRoute } from "vue-router";
import products from "../data/products.json";

const route = useRoute();
const { owner } = products.find(
    (product) => product.id === parseInt(route.params.id),
);
</script>

<template>
    <div v-if="owner">
        <h2>Owner Details</h2>
        <p>Name: {{ owner.name }}</p>
        <p>Email: {{ owner.email }}</p>
    </div>
    <div v-else>
        <p>No data available.</p>
    </div>
</template>
