<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import products from "../data/products.json";

const route = useRoute();
const router = useRouter();
const productId = parseInt(route.params.id);

// Find the product based on the route parameter
// The route parameter is accessed using route.params.id, which is then converted to an integer using parseInt() to match the product ID in the products array. The find() method is used to search for the product with the matching ID.
const product = products.find((product) => product.id === productId);

function showOwner() {
    router.push({ name: "owner", params: { id: productId } });
}
</script>

<template>
    <div>
        <h1>Product Details</h1>
        <div>
            <p>Name: {{ product.name }}</p>
            <p>Description: {{ product.description }}</p>
            <p>Year: {{ product.year }}</p>
            <p>Price: ${{ product.price }}</p>
        </div>
        <button @click="showOwner">Show Owner</button>
        <RouterView />
    </div>
</template>

<style scoped>
button {
    margin-top: 10px;
    padding: 5px 10px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>