<script setup>
import { ref, defineProps, inject } from 'vue';

const count = ref("Text to be cleared");
const max = 200;
const colors = { color:"cyan", backgroundcolor:"black" };
const props = defineProps(['index']);
const index = props.index || 1;

// Access to the "total" functionality (which is a reactive variable) from the parent component
const total = inject('total');
const increment = () => {
    count.value++;
    total.value++;
}
</script>
<template>
    <h3>{{ index }} - MyCounter Component </h3>
    It is <span v-timer />
    <br />
    It is <span v-timer.ms /> more precisely
    <br /><br />
    Elapsed time <span v-timer.chrono />
    <br />
    Elapsed time <span v-timer.chrono.ms /> more precisely
    <br /><br />
    Reactive variable count: <input type="text" v-model="count" v-clearable v-focus:colors="colors" />
    <br /><br />
    Max value: <b>{{ max }}</b>
    <br /><br />
    Entered value: <b>{{ count }}</b>
    <br />
    <button @click="increment">count + 1</button>
    <br />
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>