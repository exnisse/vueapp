<script setup>
import MyCounters from './components/MyCounters.vue'

const limits = [
  { init: 0, end: 10 },
  { init: 5 },
  { end: 20 }
];
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyCounters :limits="limits" />
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
