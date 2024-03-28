<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <SearchBar @update-search="updateSearch" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="question in filteredQuestions"
        :key="question.id"
        cols="12" md="6" lg="6"
      >
        <QuestionCard
          :question="question"
          @refresh="refreshData"
          @post-comment="handlePostComment"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';
import { useQuestionsStore } from '@/stores/questions';
import SearchBar from '@/components/SearchBar.vue';
import QuestionCard from '@/components/QuestionCard.vue';

const { questions } = useQuestionsStore();
const search = ref('');

const filteredQuestions = computed(() => {
  return questions.filter((q) =>
    q.title.toLowerCase().includes(search.value.toLowerCase())
  );
});

function updateSearch(value) {
  search.value = value;
}

function handlePostComment({ questionId, content }) {
  // Here you would handle the logic to post the comment
  // For example, using an action from your store
}

function refreshData() {
  // Refresh your questions data, if needed
}
</script>
