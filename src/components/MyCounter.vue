<script setup>
import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';

let timer;

const props = defineProps(["limits"]);
// Declaration of the "init" and "end" attributes

const init = props.limits.init || 0;   // 0: default value
const end = props.limits.end || 10;     // 10: default value

const count = ref(parseInt(init));
const doubleCount = computed(() => count.value * 2);

const increment = () => {
    if (!end || count.value < parseInt(end)) {
        count.value++;
    } else {
        stop();
    }
};
const start = () => {
    timer = setInterval(() => {
        increment();
    }, 1000);
};
const stop = () => {
    clearInterval(timer);
};
onMounted(() => {
    start();
});
onUnmounted(() => {
    stop();
});
</script>
<template>
    <h3> MyCounter Component </h3>
    init: {{ init }} => end: {{ end }} <br><br>
    Reactive variable count: <b>{{ count }}</b> <br>
    Reactive computed variable doubleCount: <b>{{ doubleCount }}</b>
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>