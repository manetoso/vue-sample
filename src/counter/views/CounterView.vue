// NOTES: This is a simple counter view component that uses the composition API to manage the state
of the counter.
<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(5)

// const increase = () => {
//   counter.value++
// }
</script>

<template>
  <h2>Counter View: {{ counter }}</h2>
  <!-- <button @click="increase">+1</button> -->
  <button @click="counter++">+1</button>
</template>
