<script setup>
import { ref, watch } from "vue";
import srcQuiz from "../data/quizes.json";

import QuizCard from "../components/QuizCard.vue";

const quizes = ref(srcQuiz);
const searchQuery = ref("");

// watch function akan menjalankan callback ketika searchQuery mengalami perubahan value
watch(searchQuery, () => {
    quizes.value = srcQuiz.filter((quiz) => {
        return quiz.title
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
    });
});
</script>

<template>
    <div>
        <header>
            <h1 id="title">Quizes</h1>
            <input
                v-model.trim="searchQuery"
                type="text"
                id="search-input"
                placeholder="Search quizes..."
            />
        </header>

        <section id="quiz-container">
    <!-- gunakan component QuizCard untuk menampilkan data quizes -->
            <QuizCard v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />
        </section>
    </div>
</template>

<style scoped>
header {
    margin-top: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
}

#title {
    font-weight: bold;
    margin-right: 30px;
}

#search-input {
    border: 2px solid #a09797;
    background-color: #c9c9c9a8;
    padding: 5px;
    border-radius: 5px;
}

#quiz-container {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 20px;
}
</style>
