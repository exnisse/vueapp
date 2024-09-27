<script setup>
import { ref, computed, defineProps } from 'vue';

const doubleCount = computed(() => count.value * 2);
const props = defineProps(['index', 'limit']);
const init = props.limit.init || 0;
const end = props.limit.end || undefined;

const timer = ref(null);
const count = ref(init);

const increment = () => {
    if (end == undefined || count.value < end) count.value++;
}
const start = () => {
    timer.value = setInterval(increment, 1000);
};
const stop = () => {
    clearInterval(timer.value);
    timer.value = null;
};
</script>
<template>
    <h3> {{index}} - MyCounter Component </h3>
    init = {{ init }}, end = {{ end ? end : "infinity" }} <br>
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