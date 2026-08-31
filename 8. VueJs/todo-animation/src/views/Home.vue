<script setup>
import { ref } from "vue";
import gsap from "gsap";

const tasks = ref(["Learn Vue.js", "Build a Todo App", "Add Animations"]);

const newTask = ref("");

const addTask = () => {
    if (newTask.value.trim() !== "") {
        tasks.value.push(newTask.value.trim());
        newTask.value = "";
    }
};

const removeTask = (index) => {
    tasks.value.splice(index, 1);
};

function beforeEnter(el) {
    el.style.opacity = 0;
    el.style.transform = "opacity(0)";
}

function enter(el) {
    gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        delay: el.dataset.index * 0.2,
    });
}

function beforeLeave(el) {
    el.style.opacity = 1;
    el.style.transform = "scale(1)";
}

function leave(el) {
    el.style.position = "absolute";   
    el.style.opacity = 0;
    el.style.transform = "scale(0)";
    el.style.transition = "all 0.6s ease";
}
</script>

<template>
    <main>
        <div class="container">
            <input
                type="text"
                autofocus
                v-model="newTask"
                @keyup.enter="addTask"
            />
            <div class="card-list">
                <TransitionGroup
                    name="list"
                    appear
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @before-leave="beforeLeave"
                    @leave="leave"
                >
                    <div
                        class="card"
                        v-for="(task, index) in tasks"
                        :key="task"
                        :data-index="index"
                        @click="removeTask(tasks.indexOf(task))"
                    >
                        {{ task }}
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </main>
</template>

<style scoped>
.container {
    max-width: 300px;
    margin: 0 auto;
}

.container input {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card {
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    cursor: pointer;
}

/* .list-enter-from {
    opacity: 0;
    transform: scale(0.9);
}
.list-enter-to {
    opacity: 1;
    transform: scale(1);
}
.list-enter-active {
    transition: all 0.4s ease;
} */

/* .list-leave-from {
    opacity: 1;
    transform: scale(1);
}
.list-leave-to {
    opacity: 0;
    transform: scale(0);
}
.list-leave-active {
    transition: all 0.4s ease;
} */

.list-move {
    transition: all 0.4s ease;
}
</style>
