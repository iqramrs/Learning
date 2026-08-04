<script setup>
// defineProps digunakan untuk mendefinisikan props yang diterima oleh component
// menggunakan constructor function defineProps, kita bisa mendefinisikan props yang diterima oleh component
    const { quiz } = defineProps(['quiz'])
</script>

<template>
    <div class="card">
        <img :src="quiz.img" :alt="quiz.title" />
        <div class="card-body">
            <h2>{{ quiz.title }}</h2>
            <p>{{ quiz.questions.length }} Questions</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 300px;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 0px 5px #0000004d;
}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-body {
    padding: 0 15px;
}

.card-body h2 {
    font-size: 20px;
    font-weight: bold;
}
</style>
