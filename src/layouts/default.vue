<!-- src/layouts/default.vue -->

<template>
  <v-app>
    <!-- <v-app-bar app>
      <v-toolbar-title>LeetCode Blog</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/questions" text>Questions</v-btn>
      <v-btn to="/submit-question" text>Submit a Question</v-btn>
    </v-app-bar> -->
    <Nav-Bar/>
    <v-main>
      <router-view />
    </v-main>
    
    <AppFooter />
  </v-app>
</template>

<script lang="ts" setup>
// Import and use components if needed
</script>
