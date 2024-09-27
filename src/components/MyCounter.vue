<script setup>
import { ref, computed } from 'vue';

const timer = ref(null);
const count = ref(0);
const doubleCount = computed(() => count.value * 2);

const increment = () => count.value++;
const start = () => {
    timer.value = setInterval(increment, 1000);
};
const stop = () => {
    clearInterval(timer.value);
    timer.value = null;
};
</script>
<template>
    <h3> MyCounter Component </h3>
    Reactive variable count: <b>{{ count }}</b> <br>
    Reactive computed variable doubleCount: <b>{{ doubleCount }}</b> <br><br>
    <button v-if="!timer" @click="start()">Start</button>
    <button v-else @click="stop()">Stop</button>
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>