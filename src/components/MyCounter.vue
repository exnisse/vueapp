<script setup>
import useFormatDate from '@/composables/userFormatDate';

const date = new Date();    // Current date

const dateMMDDYYYY = useFormatDate(date, "MM-DD-YYYY");
const dateDDMMYYYY = useFormatDate(date, "DD-MM-YYYY");
const dateMMDDYYYY_slash = useFormatDate(date, "MM/DD/YYYY");
const dateDDMMYYYY_slash = useFormatDate(date, "DD/MM/YYYY");
</script>
<template>
    <h3> MyCounter Component </h3>
    Current date: <b>{{ date }}</b>
    <hr>
    Date in MM-DD-YYYY format: <b>{{ dateMMDDYYYY }}</b>
    <br>
    Date in DD-MM-YYYY format: <b>{{ dateDDMMYYYY }}</b>
    <br>
    Date in MM/DD/YYYY format: <b>{{ dateMMDDYYYY_slash }}</b>
    <br>
    Date in DD/MM/YYYY format: <b>{{ dateDDMMYYYY_slash }}</b>
    <br /><br />
</template>
<style scoped>
h3 {
    font-family: papyrus;
    font-size: 20px;
}
</style>