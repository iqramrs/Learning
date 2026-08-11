<template>
    <header>
        <h4>Question 1</h4>
        <div class="bar">
            <div class="bar-progress"></div>
        </div>
    </header>
    <section id="question-container">
        <h2>What is the capital of France?</h2>
    </section>
    <section id="answer-container">
        <div class="option">
            <p class="option-label">A.</p>
            <div class="option-value">Paris</div>
        </div>
        <div class="option">
            <p class="option-label">B.</p>
            <div class="option-value">London</div>
        </div>
        <div class="option">
            <p class="option-label">C.</p>
            <div class="option-value">Berlin</div>
        </div>
    </section>
</template>

<style scoped>
header {
    margin-top: 30px;
}

header h4 {
    font-size: 30px;
}

.bar{
    width: 100%;
    height: 10px;
    background-color: #c9c9c9a8;
    border-radius: 5px;
}
</style>