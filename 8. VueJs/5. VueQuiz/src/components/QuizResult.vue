<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";
const { quizlength, numberOfCorrectAnswers } = defineProps([
    "quizlength",
    "numberOfCorrectAnswers",
]);
</script>

<template>
    <section class="results">
        <h1>Quiz Result</h1>
        <p>You answered {{ numberOfCorrectAnswers }} out of {{ quizlength }} questions correctly.</p>
        <RouterLink to="/" class="home-link">Back to Home</RouterLink>
    </section>
</template>

<style scoped>
    .results {
        text-align: center;
        padding: 2rem;
    }

    p {
        font-size: 20px;
        margin-bottom: 1rem;
    }

    .home-link {
        display: inline-block;
        margin-top: 1rem;
        padding: 0.5rem 1rem;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 0.25rem;
    }
</style>