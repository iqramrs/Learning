<script setup>
import QuizHeader from "@/components/QuizHeader.vue";
import QuizContent from "@/components/QuizContent.vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import quizes from "../data/quizes.json";
import QuizResult from "@/components/QuizResult.vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((quiz) => quiz.id === quizId);

const numberOfCorrectAnswers = ref(0);
const currentQuestionIndex = ref(0);
const showResult = ref(false);

const questionPage = computed(() => {
    return `${currentQuestionIndex.value + 1} of ${quiz.questions.length}`;
});
const barProgressWidth = computed(() => {
    return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`;
});

function handleAnswerSelect(answers) {
    if (answers.correct === true) {
        numberOfCorrectAnswers.value++;
    }
    if (currentQuestionIndex.value === quiz.questions.length - 1) {
        showResult.value = true;
        return;
    }
    currentQuestionIndex.value++;
}
</script>

<template>
    <QuizHeader
        v-if="!showResult"
        :questionPage="questionPage"
        :barProgressWidth="barProgressWidth"
    />
    <QuizContent
        v-if="!showResult"
        :question="quiz.questions[currentQuestionIndex]"
        @answerSelected="handleAnswerSelect"
    />
    <QuizResult
        v-else
        :quizlength="quiz.questions.length"
        :numberOfCorrectAnswers="numberOfCorrectAnswers"
    />
</template>

<style scoped></style>
