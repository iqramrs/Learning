<script setup>
import ProductCard from "@/components/Product.vue";
import Pagination from "@/components/Pagination.vue";

import { ref, watch, onMounted } from "vue";
import axios from "axios";

const products = ref([]);
const page = ref(1);
const limit = ref(12);
const API_URL =
    `http://localhost:3000/products?_page=${page.value}&_per_page=${limit.value}`;

onMounted(async () => {
    products.value = await axios.get(API_URL).then((res) => res.data);
    // console.log(products.value);
});

function changePage(newPage) {
    if (newPage < 1) return;
    if (newPage > products.value.pages) return;
    page.value = newPage;
}

watch(page, async () => {
    products.value = await axios.get(API_URL).then((res) => res.data);
});
// const fetchProducts = async () => {
//     try {
//         const response = await axios.get("http://localhost:3000/products");
//         products.value = response.data;
//     } catch (error) {
//         console.error("Error fetching products:", error);
//     }
// };
// fetchProducts();
</script>

<template>
    <main>
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
