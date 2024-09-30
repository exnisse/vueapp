<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const count = ref(0);
const props = defineProps(['index']);
const index = props.index || 1;

// We define the "incr" event to be used towards the parent component
const emits = defineEmits(['incr']);
const increment = () => {
    count.value++;
    emits('incr', 1);   // Sending the "incr" event with the value 1
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