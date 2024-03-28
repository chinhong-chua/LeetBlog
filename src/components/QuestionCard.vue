<template>
  <v-card>
    <v-card-title>{{ question.title }}</v-card-title>
    <v-card-text>{{ question.description }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="toggleComments">View Comments</v-btn>
    </v-card-actions>
    <CommentSection
      v-if="showComments"
      :comments="question.comments"
      @post-comment="postComment"
    />
  </v-card>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import CommentSection from "./CommentSection.vue";
import {Question} from '@/types/question-types';

// defineProps({ Question: Question });
// defineProps<{
//     question: Question

// }>()

// const props = defineProps<Question>()

const props = defineProps({
    question: Question,
})



const showComments = ref(false);
const emit = defineEmits(["refresh"]);

function toggleComments() {
  showComments.value = !showComments.value;
}

function postComment(content) {
  emit("post-comment", { questionId: props.question.id, content });
}
</script>
