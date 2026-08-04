<script setup>
import { ref } from "vue";
const showForm = ref(false);
const newMemo = ref("");
const memos = ref([]);
const errorMessage = ref("");

const saveMemo = () => {
    if (!newMemo.value) {
        errorMessage.value = "Please enter a memo.";
        return;
    }
    errorMessage.value = "";
    memos.value.push({
        id: Date.now(),
        notes: newMemo.value,
        date: new Date().toLocaleDateString("en-GB"),
        backgroundColor: getRandomColor(),
    });
    newMemo.value = "";
    showForm.value = false;
};

const deleteMemo = (id) => {
    memos.value = memos.value.filter((memo) => memo.id !== id);
};

const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
</script>

<template>
    <main>
        <div class="container">
            <header>
                <h1 class="header-title">Memo</h1>
                <button @click="showForm = true" class="header-btn">+</button>
            </header>
            <div class="card-container">
                <div
                    class="card"
                    v-for="memo in memos"
                    :key="memo.id"
                    :style="{ backgroundColor: memo.backgroundColor }"
                >
                    <p class="card-content">
                        {{ memo.notes }}
                    </p>
                    <div class="card-footer">
                        <p class="card-date">{{ memo.date }}</p>
                        <button
                            @click="deleteMemo(memo.id)"
                            class="card-delete-btn"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="showForm" class="form-overlay">
            <div class="form-modal">
                <button @click="showForm = false" class="form-close-btn">
                    &times;
                </button>

                <p v-if="errorMessage" class="form-error">{{ errorMessage }}</p>

                <textarea
                    v-model="newMemo"
                    id="memo"
                    cols="30"
                    rows="10"
                ></textarea>
                <button @click="saveMemo" class="form-submit-btn">Save</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
}

.container {
    max-width: 900px;
    padding: 10px;
    margin: 0 auto;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-title {
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 30px;
}

.header-btn {
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    border-radius: 100%;
    background-color: darkcyan;
    color: white;
}

.card {
    width: 255px;
    height: 255px;
    padding: 10px;
    background-color: pink;
    border-radius: 2%;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-delete-btn {
    align-self: flex-end;
    padding: 5px 10px;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.form-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-modal {
    width: 420px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
}

.form-submit-btn {
    padding: 10px 20px;
    font-size: 20px;
    width: 100%;
    background-color: darkcyan;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 15px;
    color: white;
}

.form-close-btn {
    position: absolute;
    top: 2px;
    right: 5px;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;
}

.form-error {
    color: red;
}
</style>
