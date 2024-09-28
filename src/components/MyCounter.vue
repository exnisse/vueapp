<script setup>
import { ref } from 'vue';

const count = ref();
const verifyKey = () => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const moves = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab', 'Home', 'End'];
    let authorized;
    authorized = [...numbers, ...moves];

    // If the key is not allowed, do not take it into account.
    // The event object is available here.
    if (!authorized.includes(event.key)) {
        event.preventDefault();
    }
}
</script>
<template>
    <h3> MyCounter Component </h3>
    Reactive variable count: <input type="text" v-model="count" @keydown="verifyKey" />
    <br /><br />
    Entered value: <b>{{ count }}</b> <br>
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>