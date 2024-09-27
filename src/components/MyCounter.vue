<script setup>
import { defineProps, onUpdated } from 'vue';

const props = defineProps(['count', 'doubleCount']);

console.log("setup: count = ", props.count);
onUpdated(() => {
    console.log("onUpdated: count = ", props.count);
});
</script>
<template>
    <h3> MyCounter Component </h3>
    Reactive variable count: <b>{{ count }}</b> <br>
    Reactive computed variable doubleCount: <b>{{ doubleCount }}</b> <br><br>
    Input : <input type="text" v-bind:value="count" /> <br><br>
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>