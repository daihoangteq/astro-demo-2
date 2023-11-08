<!--
We can render content conditionally or in a loop with the v-if and v-for directives.
-->

<script setup>
import { ref } from 'vue'
const list = ref([1, 2, 3])
console.log(list);
</script>

<template>
  <button @click="list.push(list.length + 1)">Push Number {{ list.length }}</button>
</template>