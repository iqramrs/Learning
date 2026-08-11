<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["answerSelected"]);
const { question } = defineProps(["question"]);

function handleAnswerSelect(option) {
    emit("answerSelected", option);
}
</script>

<template>
    <section id="question-container">
        <h2 class="question-title">{{ question.text }}</h2>
    </section>
    <section id="answer-container">
        <div
            class="option"
            v-for="option in question.answers"
            :key="option.id"
            @click="handleAnswerSelect(option)"
        >
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">{{ option.text }}</div>
        </div>
    </section>
</template>

<style scoped>
#question-container {
    margin-top: 50px;
}

.question-title {
    font-size: 25px;
    font-weight: bold;
}

.option {
    display: flex;
    align-items: center;
    cursor: pointer;
}

.option-label {
    font-size: 20px;
    font-weight: bold;
    width: 50px;
    height: 50px;
    background-color: #bdbdbd;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-value {
    font-size: 20px;
    font-weight: bold;
    padding: 0 20px;
    background-color: #c9c9c9a8;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
}
</style>
