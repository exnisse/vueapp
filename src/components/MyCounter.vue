<script setup>
import { defineProps } from 'vue';
import useCounterMaxWithError from '../composables/useCounterMaxWithError.js';
import useWindowSize from '@/composables/useWindowSize.js';
import useGeolocationWithDetails from '@/composables/useGeolocationWithDetails.js';
const windowSize = useWindowSize();
const [latitude, longitude, country, city] = useGeolocationWithDetails();

const init = 10;
const max = 5;
const [count, increment, decrement, error] = useCounterMaxWithError(init, max); // Initial value is 0
const colors = { color:"cyan", backgroundcolor:"black" };
const props = defineProps(['index']);
const index = props.index || 1;

// Access to the "total" functionality (which is a reactive variable) from the parent component
// const total = inject('total');
</script>
<template>
    <h3>{{ index }} - MyCounter Component </h3>
    Window size: <b>{{ windowSize }}</b>
    <br />
    Latitude: <b>{{ latitude }}</b>
    <br />
    Longitude: <b>{{ longitude }}</b>
    <br />
    Map around the city: <b b-show="city">{{ city }} - {{ country }}</b>
    <br />
    <div v-map="{latitude:latitude, longitude: longitude}" id="map" />
    <br />
    It is <span v-timer />
    <br />
    It is <span v-timer.ms /> more precisely
    <br /><br />
    Elapsed time <span v-timer.chrono />
    <br />
    Elapsed time <span v-timer.chrono.ms /> more precisely
    <br /><br />
    Reactive variable count: <input type="text" v-model="count" v-clearable v-focus:colors="colors" />
    <br /><br />
    Max value: <b>{{ max }}</b>
    <br /><br />
    Error: <b>{{ error }}</b>
    <br />
    Entered value: <b>{{ count }}</b>
    <br />
    <button @click="increment">count + 1</button> &nbsp;
    <button @click="decrement">count - 1</button>
    <br />
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
#map {
    width: 100%;
    height: 300px;
}
</style>