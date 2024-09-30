<script setup>
import { ref, defineProps, inject } from 'vue';

const count = ref(0);
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
    Reactive variable count: <b>{{ count }}</b>
    <br /><br />
    <button @click="increment">count + 1</button>
    <br />
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>