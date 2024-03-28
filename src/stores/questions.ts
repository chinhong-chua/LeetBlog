import { defineStore } from "pinia";

interface Question {
  id: number;
  title: string;
  description: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  questionId: number;
  content: string;
}

export const useQuestionsStore = defineStore("questions", {
  state: () => ({
    questions: [
      {
        id: 1,
        title: "Two Sum",
        description:
          "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        comments: [
          {
            id: 1,
            questionId: 1,
            content: "Can you provide more details on the constraints?",
          },
        ],
      },
      // ... more questions
    ] as Question[],
  }),
  getters: {
    // You can add getters if needed
  },
  actions: {
    // You can add actions for fetching from an API, posting new questions, etc.
    async fetchQuestions() {},
    async fetchQuestionDetails(id: string) {},
  },
});
