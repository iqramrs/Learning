<script setup>
import { useRoute } from 'vue-router';
import products from '../data/products.json';

const route = useRoute();
const {owner} = products.find((product)=> product.id === parseInt(route.params.id));
</script>

<template>
    <div>
        <h1>Owner Details</h1>
        <p>Name: {{ owner.name }}</p>
        <p>Email: {{ owner.email }}</p>
    </div>
</template>
