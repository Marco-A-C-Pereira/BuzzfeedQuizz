export interface quizzInterface {
    id: number;
    title: string;
    questions: {
      id: number;
      question: string;
      options: {
        id: number;
        name: string;
        alias: string;
      }[];
    }[];
    results: {
      alias: string;
      result: string;
    }[];
}
