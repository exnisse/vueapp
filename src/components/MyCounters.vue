<script setup>
import MyCounter from './MyCounter.vue';
import { ref, defineProps } from 'vue';

const props = defineProps(['nb']);
const nb = props.nb || 1;

const total = ref(0);
const increment = (value) => {
    total.value += value;
}
</script>
<template>
    <MyCounter v-for="i in nb" :key="i" :index="i" @incr="increment" />
    <br /><hr><br />
    Overall Total: <b>{{ total }}</b>
</template>