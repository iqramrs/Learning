<script setup>
import { defineProps } from 'vue';

const { questionPage, barProgressWidth } = defineProps(['questionPage', 'barProgressWidth']);
</script>


<template>
    <header>
        <h1>Questions {{ questionPage }}</h1>
        <div class="bar">
            <div class="bar-progress" :style="{ width: barProgressWidth }"></div>
        </div>
    </header>
</template>

<style scoped>
header {
    margin-top: 30px;
}

header h1 {
    font-size: 35px;
    margin-bottom: 30px;
}

.bar {
    width: 100%;
    height: 25px;
    background-color: #c9c9c9a8;
    border-radius: 50px;
}

.bar-progress {
    height: 100%;
    width: 0%;
    background-color: #ffc163;
    border-radius: 50px;
}
</style>