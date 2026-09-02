<script setup>
import ProductCard from "@/components/Product.vue";
import Pagination from "@/components/Pagination.vue";
import Loading from "@/components/Loading.vue";

import { ref, watchEffect } from "vue";
import axios from "axios";

const products = ref([]);
const page = ref(1);
const limit = ref(12);
const isLoading = ref(true);


async function fetchProducts() {
    isLoading.value = true;
    const API_URL = `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`;
    try {
        const response = await axios.get(API_URL);
        products.value = response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
    } finally {
        isLoading.value = false;
    }
}

watchEffect(() => {
    fetchProducts();
});

function changePage(newPage) {
    if (newPage < 1) return;
    if (newPage > products.value.pages) return;
    page.value = newPage;
}
</script>

<template>
    <div v-if="isLoading">
        <Loading />
    </div>
    <main v-else>
        <div class="product-grid">
            <ProductCard
                v-for="product in products.data"
                :key="product.id"
                :product="product"
            />
        </div>
        <div class="pagination">
            <Pagination
                :page="page"
                :totalPages="products.pages"
                @changePage="changePage"
            />
        </div>
    </main>
</template>

<style scoped>
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    width: 80%;
    margin: 0 auto;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
</style>
