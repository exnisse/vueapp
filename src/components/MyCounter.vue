<script setup>
import { defineProps } from 'vue';
import useCounterMaxWithError from '../composables/useCounterMaxWithError.js';

const init = 10;
const max = 5;
const [count, increment, decrement, error] = useCounterMaxWithError(init, max); // Initial value is 0
const colors = { color:"cyan", backgroundcolor:"black" };
const props = defineProps(['index']);
const index = props.index || 1;

// Access to the "total" functionality (which is a reactive variable) from the parent component
// const total = inject('total');
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
    Error: <b>{{ error }}</b>
    <br />
    Entered value: <b>{{ count }}</b>
    <br />
    <button @click="increment">count + 1</button> &nbsp;
    <button @click="decrement">count - 1</button>
    <br />
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>