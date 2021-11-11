export interface IQuestion {
  id: number;
  title: string;
  options: string[];
  answer: string;
}

export const QUESTIONS: IQuestion[] = [
    {
      id: 1,
      "title": "What is the past form of 'eat'?",
      "options": ["eat", "ate", "eaten", "have ate"],
      "answer": "ate"
    },
    {
      id: 2,
      "title": "Which sentence is present continuous tense?",
      "options": [
        "I eat rice",
        "I am eating rice",
        "I have ate rice",
        "I have been eating rice for 1 year"
      ],
      "answer": "I am eating rice"
    }
 ]
