<script setup>
import MyCounter from './MyCounter.vue';
import { defineProps } from 'vue';
defineProps(['limits']);
</script>
<template>
    <MyCounter v-for="(limit, i) in limits" :key="i" :index="i" :limit="limit" />
</template>