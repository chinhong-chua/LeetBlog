/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

// import { createRouter, createWebHistory } from 'vue-router'
// import HomePage from '@/pages/HomePage.vue';
// import QuestionsPage from '@/pages/QuestionsPage.vue';

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: HomePage,
//   },
//   {
//     path: '/questions',
//     name: 'Questions',
//     component: QuestionsPage,
//   },
//   // ...other routes
// ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: setupLayouts,
  // routes
})

export default router
