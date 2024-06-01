<script lang="ts">
import { defineComponent, ref } from 'vue'

// NOTES: COMPOSITION API COMPONENT
export default defineComponent({
  // DEFINE VARIABLES AND FUNCTIONS
  setup() {
    // REACTIVE VARIABLES
    const counter = ref(5)

    // FUNCTIONS
    const increase = () => {
      // INCREMENT VALUE BECAUSE IT IS A REACTIVE OBJECT
      counter.value++
    }
    return {
      counter,
      increase
    }
  }
})
</script>

<template>
  <h2>Counter View: {{ counter }}</h2>
  <button @click="increase">+1</button>
</template>
