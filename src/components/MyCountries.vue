<script setup>
import { defineProps, ref, onMounted, watch } from 'vue';
const props = defineProps(['name']);
const names = ref([]);  // Countries names displayed in the list
let countries = []; // All country names (retrieved only once at startup)

async function getCountries() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    countries = data.map(country => country.name.common);
    countries = countries.sort((a, b) => a.localeCompare(b));
    return countries;
}
onMounted(async () => {
    names.value = await getCountries();
});
watch(()=>props.name, (newName) => {
    let countriesFiltered = countries.filter((n) => {
        // Construct the regular expression (regex)
        const regex = new RegExp('^' + newName, 'i');
        if (n.match(regex)) return true; // We keep the name in the list
        else return false; // We remove the name from the list
    });
    names.value = countriesFiltered;
});
</script>

<template>
    <h3>Couintry List</h3>
    <div v-show="!countries.length">Fetching countries in progress...</div>
    Entered Country: {{ name }}
    <ul>
        <li v-for="country in names" :key="country">{{ country }}</li>
    </ul>
</template>