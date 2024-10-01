<script setup>
import MyCounters from './components/MyCounters.vue';
import { ref, provide } from 'vue';

const total = ref(0);

// The total variable is made avaialble to all child components under the name "total"
provide('total', total);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyCounters :nb="1" />
  <br /><hr><br />
  Overall Total: <b>{{ total }}</b>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
