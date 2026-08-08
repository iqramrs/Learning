<script setup>
import { useRoute } from 'vue-router';
import products from '../data/products.json';

const route = useRoute();
// Find the product based on the route parameter
// The route parameter is accessed using route.params.id, which is then converted to an integer using parseInt() to match the product ID in the products array. The find() method is used to search for the product with the matching ID.
const product = products.find((product)=> product.id === parseInt(route.params.id));

</script>

<template>
    <div>
        <h1>Product Details</h1>
        <p>Name: {{ product.name }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Year: {{ product.year }}</p>
        <p>Price: ${{ product.price }}</p>
    </div>
</template>