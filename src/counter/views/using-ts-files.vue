<script lang="ts" src="./CounterView.ts"></script>

<template>
  <h2>Counter View: {{ counter }}</h2>
  <!-- <button @click="increase">+1</button> -->
  <button @click="counter++">+1</button>
</template>
