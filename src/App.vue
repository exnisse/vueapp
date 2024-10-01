<script setup>
import MyCountries from './components/MyCountries.vue';
import { ref } from 'vue';

const name = ref('');
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <b>Country</b>: <input type="text" v-model="name" />
  <br />
  <MyCountries :name="name" />
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
