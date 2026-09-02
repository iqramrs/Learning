<script setup>
const props = defineProps({
    page: Number,
    totalPages: Number,
});

const emit = defineEmits(["changePage"]);

function changePage(newPage) {
    emit("changePage", newPage);
}
</script>

<template>
    <button
        class="pagination-button" id="prev-button"
        @click="changePage(page - 1)"
    >
        &lt;
    </button>
	<span>{{ page }} / {{ totalPages }}</span>
    <button
        class="pagination-button" id="next-button"
        @click="changePage(page + 1)"
    >
        &gt;
    </button>
</template>

<style scoped>
.pagination-button {
    background-color: #fff;
    color: #00b894;
    padding: 8px 12px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 16px;
    margin: 0 5px;
}
</style>
