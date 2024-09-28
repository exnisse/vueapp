<script setup>
import { ref } from 'vue';

const name = ref('');
let dates = [];
for (let year=2023; year > 1900; year--) {
  dates.push(year);
}
const birthdate = ref('');
const maritalStatus = ref('');
const acceptConditions = ref([]);
</script>

<template>
  <h3>Input Form</h3>
  <form>
    <label for="name">Name:</label>
    <input id="name" v-model="name" />
    <br /><br />
    <label for="birthdate">Date of Birth:</label>
    <select id="birthdate" v-model="birthdate">
      <option v-for="date in dates" :key="date" :value="date">{{ date }}</option>
    </select>
    <br /><br />
    <label for="maritalStatus">Marital Status:</label>
    <input type="radio" id="maried" value="M" v-model="maritalStatus" />
    <label for="maried">Married</label>
    <input type="radio" id="single" value="S" v-model="maritalStatus" />
    <label for="single">Single</label>
    <input type="radio" id="divorced" value="D" v-model="maritalStatus" />
    <label for="divorced">Divorced</label>
    <input type="radio" id="widowed" value="W" v-model="maritalStatus" />
    <label for="widowed">Widowed</label>
    <br /><br />
    <input type="checkbox" id="read" value="read" v-model="acceptConditions" />
    <label for="read">I have read the terms of use.</label>
    <br /><br />
    <input type="checkbox" id="accept" value="accept" v-model="acceptConditions" />
    <label for="accept">I accept the general terms and conditions of sale.</label>
    <br /><br />
    <h3>Reactive Variables</h3>
    <p>Name is: {{ name }}</p>
    <br /><br />
    <p>birthdate is: {{ birthdate }}</p>
    <br /><br />
    <p>maritalStatus is: {{ maritalStatus }}</p>
    <br /><br />
    <p>acceptConditions is: {{ acceptConditions }}</p>
    <br /><br />
  </form>
</template>

<style scoped>
h3 {
    background-color: gainsboro;
    padding: 5px;
}
</style>