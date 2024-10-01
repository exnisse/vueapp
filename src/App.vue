<script setup>
import MyCountries from './components/MyCountries.vue';
import { ref, provide } from 'vue';

const name = ref('');
provide('name', name);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <b>Country</b>: <input type="text" v-model="name" v-focus v-integers-only.hexa.upper />
  <br />
  <MyCountries />
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
