<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
</script>
<template>
    <h3> MyCounter Component </h3>
    Reactive variable count: <b>{{ count }}</b> <br>
    Reactive computed variable doubleCount: <b>{{ doubleCount }}</b> <br><br>
    Input for count (using v-bind): <input type="text" v-bind:value="count" /> <br>
    Input for count (using v-model): <input type="text" v-model="count" />
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>