<template>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>Comments</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list dense>
            <v-list-item v-for="comment in comments" :key="comment.id">
              <v-list-item-content>{{ comment.content }}</v-list-item-content>
            </v-list-item>
            <!-- Add Comment Form -->
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Add a comment"
                  v-model="newCommentContent"
                  @keyup.enter="handlePostComment"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    comments: Array,
  });
  
  const newCommentContent = ref('');
//   const emit = defineEmits(['post-comment']);
const emit = defineEmits<{ (event: 'post-comment', content: string): void }>();

  
  function handlePostComment() {
    if (newCommentContent.value.trim()) {
      emit('post-comment', newCommentContent.value);
      newCommentContent.value = ''; // Reset input after posting
    }
  }
  </script>
  