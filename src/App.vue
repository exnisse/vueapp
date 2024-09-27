<script setup>
import { ref, computed } from 'vue';
import MyCounter from './components/MyCounter.vue'

const count = ref(0);
const doubleCount = computed(() => count.value * 2);
const increment = () => {
  count.value++;
};
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyCounter :count="count" :doubleCount="doubleCount" />
  <br><br>
  <button @click="increment">Increment</button>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
