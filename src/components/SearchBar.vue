<template>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search questions"
      single-line
      hide-details
    ></v-text-field>
  </template>
  
  <script setup>
  import { ref, watch, defineEmits } from 'vue';
  
  const search = ref('');
  const emit = defineEmits(['update-search']);
  
  watch(search, (newValue) => {
    emit('update-search', newValue);
  });
  </script>
  