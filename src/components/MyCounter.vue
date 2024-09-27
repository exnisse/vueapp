<script setup>
import useUppderCase from '@/composables/useUpperCase';

const name = useUppderCase('eric');
</script>
<template>
    <h3> MyCounter Component </h3>
    <b>Uppercase Input:</b>
    <br /><br />
    Variable name: <input type="text" v-model="name" />
    <br /><br />
    Variable name: {{ name }}
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>