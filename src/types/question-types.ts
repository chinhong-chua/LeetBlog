export interface Question {
    id: number;
    title: string;
    description: string;
    comments: Comment[];
  }
  
  export interface Comment {
    id: number;
    questionId: number;
    content: string;
  }
  